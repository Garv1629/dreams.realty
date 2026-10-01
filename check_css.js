const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('STATUS: ' + res.statusCode);
    console.log('LENGTH: ' + data.length);
    
    // Check for stylesheet links
    var hasStylesheet = data.indexOf('stylesheet') > -1;
    console.log('HAS_STYLESHEET: ' + hasStylesheet);
    
    // Check for _next/static CSS
    var hasNextCSS = data.indexOf('_next/static/css') > -1;
    console.log('HAS_NEXT_CSS: ' + hasNextCSS);
    
    // Check for inline styles or class attributes
    var hasClasses = data.indexOf('class=') > -1;
    console.log('HAS_CLASSES: ' + hasClasses);
    
    // Check for font CSS variable
    var hasFontVar = data.indexOf('__inter') > -1 || data.indexOf('__playfair') > -1;
    console.log('HAS_FONT_VARS: ' + hasFontVar);
    
    // Extract and show head section
    var headStart = data.indexOf('<head');
    var headEnd = data.indexOf('</head>');
    if (headStart > -1 && headEnd > -1) {
      var head = data.substring(headStart, headEnd + 7);
      // Extract link tags
      var linkRegex = /<link[^>]*>/g;
      var match;
      var count = 0;
      while ((match = linkRegex.exec(head)) !== null) {
        count++;
        console.log('LINK_TAG_' + count + ': ' + match[0]);
      }
      // Extract style tags
      var styleRegex = /<style[^>]*>[^<]{0,200}/g;
      while ((match = styleRegex.exec(head)) !== null) {
        console.log('STYLE_TAG: ' + match[0].substring(0, 200));
      }
    }
    
    // Show body tag
    var bodyStart = data.indexOf('<body');
    if (bodyStart > -1) {
      var bodyTag = data.substring(bodyStart, data.indexOf('>', bodyStart) + 1);
      console.log('BODY_TAG: ' + bodyTag);
    }
    
    // Show first 500 chars of body content
    if (bodyStart > -1) {
      var bodyContent = data.substring(bodyStart, bodyStart + 600);
      console.log('BODY_PREVIEW: ' + bodyContent);
    }
  });
}).on('error', function(e) {
  console.error('ERROR: ' + e.message);
});
