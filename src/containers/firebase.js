import firebase from 'firebase';
// import initializeApp from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyCCe_FIhjwNT03b2MyDK-UlNtre5XHysPM",
    authDomain: "aqua-monitor-49fa7.firebaseapp.com",
    projectId: "aqua-monitor-49fa7",
    storageBucket: "aqua-monitor-49fa7.appspot.com",
    messagingSenderId: "132926462088",
    appId: "1:132926462088:web:43618ec6be32fcc5b2e73d",
    measurementId: "G-ZKQ7DKTHE2"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}