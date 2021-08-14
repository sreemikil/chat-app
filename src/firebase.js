import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBiyvsQsq-LNQri3hDTuVYlur2-Y_v8iQ",
  authDomain: "copycat-86d13.firebaseapp.com",
  projectId: "copycat-86d13",
  storageBucket: "copycat-86d13.appspot.com",
  messagingSenderId: "853528718279",
  appId: "1:853528718279:web:f4822bee25395a91aa47e2",
  measurementId: "G-15MSJWZKR1"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
