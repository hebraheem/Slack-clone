import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// configuration coming from firebase database to store chat info
const firebaseConfig = {
  apiKey: "AIzaSyCw94MuHx0vltwHIirSim7YxgoN1Xk8PUs",
  authDomain: "slack-clone-fdad8.firebaseapp.com",
  projectId: "slack-clone-fdad8",
  storageBucket: "slack-clone-fdad8.appspot.com",
  messagingSenderId: "792862008971",
  appId: "1:792862008971:web:7d6d3186c9f53e1db6168e",
  measurementId: "G-RNR5MQ2ZGB",
};

//to connect the frontend with firebase backend database
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//Google authetication settings
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
