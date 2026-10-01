const fs = require('fs');
const path = require('path');

const outPath = path.join(__dirname, 'palette_test_results.json');
fs.writeFileSync(outPath, '{"started": true}', 'utf-8');

async function verify() {
  try {
    const res = await fetch('http://localhost:3000');
    console.log('HTTP Status:', res.status);
    const text = await res.text();
    const lower = text.toLowerCase();

    const tokens = {
      'Navy Blue (#1F3A5F)': lower.includes('1f3a5f') || lower.includes('navy'),
      'Slate Blue (#4F7399)': lower.includes('4f7399') || lower.includes('slate'),
      'Dusty Blue (#A7B8CC)': lower.includes('a7b8cc') || lower.includes('dusty'),
      'Soft Beige (#DCD3C4)': lower.includes('dcd3c4') || lower.includes('beige'),
      'Warm Cream (#F8F5ED)': lower.includes('f8f5ed') || lower.includes('cream'),
    };

    const sections = {
      'hero-section': text.includes('hero-section'),
      'featured-properties-section': text.includes('featured-properties-section'),
      'verified-trust-section': text.includes('verified-trust-section'),
      'property-discovery-section': text.includes('property-discovery-section'),
      'buy-vs-rent-section': text.includes('buy-vs-rent-section'),
      'reviews-section': text.includes('reviews-section'),
      'enquiry-section': text.includes('enquiry-section'),
      'footer-section': text.includes('footer-section')
    };

    const results = { status: res.status, tokens, sections };
    fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  } catch (err) {
    fs.writeFileSync(outPath, JSON.stringify({ error: err.message }, null, 2), 'utf-8');
  }
}

verify();
