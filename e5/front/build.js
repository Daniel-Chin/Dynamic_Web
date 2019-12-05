const fs = require('fs');

console.log('wait');
fs.writeFileSync('./src/CONFIG.js', `
module.exports = _backtick_${process.env.CONFIG}_backtick_
`.replace('_backtick_', '`').replace('_backtick_', '`'));
console.log('good');
