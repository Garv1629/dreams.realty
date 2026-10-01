const http = require('http');
http.get('http://localhost:3000', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const linkMatches = d.match(/<link[^>]*>/gi) || [];
    const stylesheetLinks = linkMatches.filter(l => l.includes('stylesheet') || l.includes('.css'));
    console.log('STYLESHEET_LINKS:', stylesheetLinks.length);
    stylesheetLinks.forEach(l => console.log(l.substring(0, 300)));
    const styleMatches = d.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
    console.log('STYLE_TAGS:', styleMatches.length);
    const bodyMatch = d.match(/<body[^>]*>/i);
    console.log('BODY:', bodyMatch ? bodyMatch[0].substring(0, 400) : 'NOT_FOUND');
    const nextCss = d.match(/\/_next\/[^"']*\.css/gi) || [];
    console.log('NEXT_CSS_CHUNKS:', nextCss.length);
    nextCss.forEach(c => console.log(c));
  });
});
