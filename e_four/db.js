// provides an interface to Firestore

const admin = require('firebase-admin');

const BLOGS = 'blogs';

let serviceAccount;
if (process.env.SERVICE) {
  // On heroku, it's more secure to store private key as ENV
  serviceAccount = JSON.parse(process.env.SERVICE);
} else {
  // On local, we will just use file. 
  serviceAccount = require('./secret').secret;
}
console.log('initializeApp...');
const fb = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dyn-web-e4.firebaseio.com", 
});
console.log('initializeFirestore...');
const db = admin.firestore();

const setBlog = async (id, content) => {
  const docRef = db.collection(BLOGS).doc(id);
  return await docRef.set(content);
};

const getBlog = async (id) => {
  const docRef = db.collection(BLOGS).doc(id);
  return (await docRef.get()).data();
};

const getAll = async function () {
  const snapshot = await db.collection(BLOGS).get();
  const blogs = [];
  snapshot.forEach((doc) => {
    blogs.push({
      id: doc.id, 
      data: doc.data(), 
    });
  });
  return blogs;
};

module.exports = {
  setBlog, 
  getBlog, 
  getAll, 
};
