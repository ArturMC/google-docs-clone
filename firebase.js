import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcQLsc5IkEtt-ed78RaQFzpAGDoTbL5nw",
  authDomain: "docs-clone-d5344.firebaseapp.com",
  projectId: "docs-clone-d5344",
  storageBucket: "docs-clone-d5344.appspot.com",
  messagingSenderId: "320736423418",
  appId: "1:320736423418:web:031d993dd36da34c800843",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
