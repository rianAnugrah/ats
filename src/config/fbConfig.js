
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyD9SwwNJmngtdSlXPDRv9R7ZydumbfRAE0",
    authDomain: "atsk3mp-dev.firebaseapp.com",
    databaseURL: "https://atsk3mp-dev.firebaseio.com",
    projectId: "atsk3mp-dev",
    storageBucket: "atsk3mp-dev.appspot.com",
    messagingSenderId: "32854159446",
    appId: "1:32854159446:web:f2aea717cc55b0af"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});


  export default firebase;