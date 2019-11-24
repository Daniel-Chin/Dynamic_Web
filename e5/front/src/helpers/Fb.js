import app from 'firebase/app';
import firebase from 'firebase';

const { GoogleAuthProvider } = firebase.auth;

const firebaseConfig = {
  apiKey: "AIzaSyCtK6dbTnQmUEeU8s5OFEKfRxhBS7AC5sw",
  authDomain: "dyn-web-e5-r73rgg.firebaseapp.com",
  databaseURL: "https://dyn-web-e5-r73rgg.firebaseio.com",
  projectId: "dyn-web-e5-r73rgg",
  storageBucket: "dyn-web-e5-r73rgg.appspot.com",
  messagingSenderId: "786073252321",
  appId: "1:786073252321:web:221f66aa72b3a2de71a2a0"
};

class Fb {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
  }

  signIn() {
    firebase.auth().signInWithRedirect(this.provider);
    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      const user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
}

export default Fb;
