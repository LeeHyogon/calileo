import React from 'react';
import logo from './logo.svg';
import './App.css';

import {auth, googleProvider} from "./fb"

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

function App() {
  return (
    <div >
      <p> Calileo </p>
      <button onClick = {()=>googleLogin()}> googleLogin </button>
    </div>
  );
}

export default App;
