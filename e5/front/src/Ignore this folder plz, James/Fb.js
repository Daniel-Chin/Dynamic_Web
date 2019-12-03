import app from 'firebase/app';
import firebase from 'firebase';
import { firebaseConfig } from '../secret';

const { GoogleAuthProvider } = firebase.auth;

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
