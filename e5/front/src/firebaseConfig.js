let firebaseConfig;

try {
  firebaseConfig = require('./secret').firebaseConfig;
} catch (e) {
  firebaseConfig = JSON.parse(require('./CONFIG.js'));
}

export {
  firebaseConfig, 
};
