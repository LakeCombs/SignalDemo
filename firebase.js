import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTdHP94YJP9Fn_ZCT7Njgvwgqr9K6jxm4",
  authDomain: "signalclone-b73bd.firebaseapp.com",
  projectId: "signalclone-b73bd",
  storageBucket: "signalclone-b73bd.appspot.com",
  messagingSenderId: "357472966887",
  appId: "1:357472966887:web:1c08b3a7abdf576aba2a42",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };
