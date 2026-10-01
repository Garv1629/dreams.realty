async function inspect() {
  const res = await fetch('http://127.0.0.1:3000');
  const html = await res.text();
  console.log('STATUS:', res.status);
  console.log('LENGTH:', html.length);
  const checks = [
    'DREAMS REALTY',
    'Most Trusted Realtor in Bangalore',
    'Verified Luxury Homes',
    'Featured Properties',
    'The Gold Standard of Real Estate Advisory',
    'Buy or Rent in Bangalore',
    'Premier Developers',
    'Words from Bangalore Homeowners',
    'Start Your Property Journey with Us',
    'Bangalore Office'
  ];
  checks.forEach(str => {
    console.log(str, '=>', html.includes(str));
  });
}
inspect();
