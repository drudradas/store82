import { firebase } from '@firebase/app'
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCvViUMH0Mmv4vU6AJUns2oCcYdawuQ_ys",
    authDomain: "store-82.firebaseapp.com",
    databaseURL: "https://store-82-default-rtdb.firebaseio.com",
    projectId: "store-82",
    storageBucket: "store-82.appspot.com",
    messagingSenderId: "176661830474",
    appId: "1:176661830474:web:692b69bf7e6927a467ffb3"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;

 