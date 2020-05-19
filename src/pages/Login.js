import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import googleLogin from "../server/auth";
import LoginForm from "../UI/LoginForm"

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <LoginForm googleLogin = {() => googleLogin(this.props.login)} />
      </div>
    );
  }
}

export default Login;
