import React, { Component } from "react";
import cs from "./CSS/App.module.css";

import Login from "./pages/Login";
import Main from "./pages/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginned: true,
      userName: ""
    };
  }
  //작업을 했다고 가정하고
  permit = loginState => {
    this.setState({
      userName: loginState.name,
      isLoginned: loginState.loginState
    });
  };

  render() {
    return (
      <div>
        <h3 className={cs.head}> CALILEO </h3>
        {this.state.isLoginned ? (
          <Main userName={this.state.userName} />
        ) : (
          <Login login={this.permit} />
        )}
      </div>
    );
  }
}

export default App;

// import {
//   Container,
//   Button,
//   Icon,
//   Menu,
//   Input,
//   Dropdown
// } from "semantic-ui-react";

// const db_prc = () => {
//   var db = firebase.firestore();
//   let docRef = db.collection('users').doc('alovelace');
//
//   //firesbase 프로젝트의 데이터베이스 들어가면 확인가능
//   let setAda = docRef.set({
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//     anyword:'blabla'
//   });
// }

// <button onClick={() => db_prc()}> firestore data insert </button>
