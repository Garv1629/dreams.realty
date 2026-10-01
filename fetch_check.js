const http = require('http');
http.get('http://localhost:3000', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    // Check for stylesheet links
    const linkMatches = d.match(/<link[^>]*>/gi) || [];
    const stylesheetLinks = linkMatches.filter(l => l.includes('stylesheet') || l.includes('.css'));
    console.log('=== STYLESHEET LINKS ===');
    console.log('Count:', stylesheetLinks.length);
    stylesheetLinks.forEach(l => console.log(l.substring(0, 300)));

    // Check for style tags
    const styleMatches = d.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
    console.log('\n=== INLINE STYLE TAGS ===');
    console.log('Count:', styleMatches.length);
    styleMatches.forEach(s => console.log(s.substring(0, 200) + '...'));

    // Check body class
    const bodyMatch = d.match(/<body[^>]*>/i);
    console.log('\n=== BODY TAG ===');
    console.log(bodyMatch ? bodyMatch[0].substring(0, 400) : 'NOT FOUND');

    // Check for font preloads
    const fontLinks = linkMatches.filter(l => l.includes('font') || l.includes('woff'));
    console.log('\n=== FONT LINKS ===');
    console.log('Count:', fontLinks.length);
    fontLinks.forEach(l => console.log(l.substring(0, 300)));

    // Check for next.js CSS chunks
    const nextCss = d.match(/\/_next\/[^"']*\.css/gi) || [];
    console.log('\n=== NEXT.JS CSS CHUNKS ===');
    console.log('Count:', nextCss.length);
    nextCss.forEach(c => console.log(c));

    // Check for tailwind classes in html
    const hasTailwind = d.includes('tailwind') || d.includes('@tailwind');
    console.log('\n=== TAILWIND REFERENCE ===');
    console.log('Has tailwind reference:', hasTailwind);

    // Show first 500 chars of head
    const headMatch = d.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    if (headMatch) {
      console.log('\n=== HEAD (first 2000 chars) ===');
      console.log(headMatch[1].substring(0, 2000));
    }
  });
});
