const fs = require('fs');
const http = require('http');

console.log('Testing dev server connectivity...');
http.get('http://localhost:3000', (res) => {
  console.log('Status Code:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Body length:', data.length);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
