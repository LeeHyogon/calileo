import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD1M7hCwmiH_jHmM4qPFpCUp7zV--JwZQ8",
  authDomain: "calileo.firebaseapp.com",
  databaseURL: "https://calileo.firebaseio.com",
  projectId: "calileo",
  storageBucket: "calileo.appspot.com",
  messagingSenderId: "243885080901",
  appId: "1:243885080901:web:756a669c383ff3bd387e2c",
  measurementId: "G-BWKVM6P4LK"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const googleProvider =  new firebase.auth.GoogleAuthProvider();

export {googleProvider, auth}
