import firebase from 'firebase';
require('@firebase/firestore')


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfoun-4EsUBh5X_RnUGlBPK2dnA6QsT4o",
  authDomain: "book-santa-final-adca9.firebaseapp.com",
  databaseURL: "https://book-santa-final-adca9-default-rtdb.firebaseio.com",
  projectId: "book-santa-final-adca9",
  storageBucket: "book-santa-final-adca9.appspot.com",
  messagingSenderId: "612762194998",
  appId: "1:612762194998:web:5b2ff3086f93134dffb497",
  measurementId: "G-R7389R8FBW"
};

  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();