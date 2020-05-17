import React, { Component} from "react";
import {Button} from "semantic-ui-react"

import googleLogin from "../server/auth"


class Login extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
      <Button secondary onClick={() => googleLogin()}> Login to Proceed </Button>
      </div>
    )
  }
}

export default Login
