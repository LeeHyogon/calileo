import * as firebase from "firebase"
import 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyBBb7O8EH58VqO2ls9eytFGl8pg24axuZo",
  authDomain: "calileo-846c4.firebaseapp.com",
  databaseURL: "https://calileo-846c4.firebaseio.com",
  projectId: "calileo-846c4",
  storageBucket: "calileo-846c4.appspot.com",
  messagingSenderId: "281750409180",
  appId: "1:281750409180:web:f68b15bdb52ec99ba38919",
  measurementId: "G-JMLLH4N2SC"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const googleProvider =  new firebase.auth.GoogleAuthProvider();
var database=firebase.database();
var storage = firebase.storage();

export {googleProvider, auth,storage}
export default firebaseApp.firestore()
