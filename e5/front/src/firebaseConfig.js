let firebaseConfig;

try {
  firebaseConfig = require('./secret').firebaseConfig;
} catch (e) {
  firebaseConfig = JSON.parse(process.env.CONFIG);
}

export {
  firebaseConfig, 
};
