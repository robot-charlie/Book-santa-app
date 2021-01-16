import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBF35V8App03ayC_rW2Mr_G4Zb_8sX2plo",
    authDomain: "book-santa-1719a.firebaseapp.com",
    projectId: "book-santa-1719a",
    storageBucket: "book-santa-1719a.appspot.com",
    messagingSenderId: "130560519697",
    appId: "1:130560519697:web:78e55f974241efe5e90bb0"
  };


  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();