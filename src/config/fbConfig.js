import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDiWWq4BQJUeASV-4AFWQJw2sLon6K7PRY",
    authDomain: "miniproject-bec39.firebaseapp.com",
    databaseURL: "https://miniproject-bec39.firebaseio.com",
    projectId: "miniproject-bec39",
    storageBucket: "miniproject-bec39.appspot.com",
    messagingSenderId: "714429261067",
    appId: "1:714429261067:web:1ae9b63608f4bbbaab2e0e",
    measurementId: "G-1LP7K9GZGF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

 //firebase.initializeApp(config);
 firebase.firestore().settings({ timestampsInSnapshots: true });

 export default firebase;