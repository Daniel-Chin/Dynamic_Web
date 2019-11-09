const axios          = require('axios');
const fs          = require('fs');
axios({
  method:'get', 
  url:'https://www.google.com/search?q=abc', 
  headers: {
    'user-agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.87 Safari/537.36`,
  },
}).then(r => {
  fs.writeFileSync('d:/1.html', r.data);
  console.log('ok')
})
console.log('sent')
