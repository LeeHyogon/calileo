import React from 'react';
import logo from './logo.svg';
import cs from './App.module.css';

import * as firebase from "firebase"
import {auth, googleProvider} from "./fb"
import CalenderBody from './ui_comp/CalenderBody'
import Topblock from './ui_comp/Topblock'
<<<<<<< Updated upstream
=======
import { Container,Button, Icon, Menu, Input, Dropdown } from 'semantic-ui-react'
>>>>>>> Stashed changes

const googleLogin = () => {
    auth.signInWithPopup(googleProvider).then(function(result) {
    let token = result.credential.accessToken;
    let user = result.user;
    }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
  })
}
const db_prc = () => {
  var db = firebase.firestore();
  let docRef = db.collection('users').doc('alovelace');

  //firesbase 프로젝트의 데이터베이스 들어가면 확인가능
  let setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
    anyword:'blabla'
  });
}

<<<<<<< Updated upstream
function App() {
=======
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode:'login',
    }
  }
  render(){
>>>>>>> Stashed changes
  return (
    <div >
      <h3 className={cs.head}> CALILEO </h3>
      <Topblock />
      <CalenderBody />
      <button onClick = {()=>googleLogin()}> googleLogin </button>
      <button onClick = {()=>db_prc()}> firestore data insert </button>
    </div>

<<<<<<< Updated upstream
  );
=======
    );
  }
>>>>>>> Stashed changes
}

export default App;
