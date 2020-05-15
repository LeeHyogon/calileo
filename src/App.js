import React,{Component, isValidElement} from 'react';
import logo from './logo.svg';
import cs from './App.module.css';
import * as firebase from "firebase"
import {auth, googleProvider} from "./fb"

import CalenderBody from './ui_comp/CalenderBody'
import { Container,Button, Icon, Menu, Input, Dropdown } from 'semantic-ui-react'

const googleLogin = () => {
    auth.signInWithPopup(googleProvider).then(function(result) {
    let token = result.credential.accessToken;
    let user = result.user;
    console.log(user.emailVerified)
    }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
  })
}
const friendOptions = [
  {
    key: 'Y',
    text: 'Y',
    value: 'Y',
  },
  {
    key: 'M',
    text: 'M',
    value: 'M',
  },
  {
    key: 'W',
    text: 'W',
    value: 'W',
  },
  {
    key: 'D',
    text: 'D',
    value: 'D',
  },
]

const Selection = () => (
  <Dropdown
    placeholder='Select View'
    fluid
    selection
    options={friendOptions}
  />
)

const Topblock = () => (
  <div>
  <Container>
    <Menu secondary>
      <Menu.Menu position='left'>
        <Menu.Item>
          <Button basic>
            <Button.Content>
              <Icon name='list ul' />
            </Button.Content>
          </Button>
        </Menu.Item>
      </Menu.Menu>
      <Menu.Item>
      <Button basic>
        <Button.Content>
          <Icon name='save outline' />
        </Button.Content>
      </Button>
      </Menu.Item>
      <Menu.Menu position='center'>
        <Menu.Item>
          <Button.Group basic size='big' >
            <Button icon='chevron left' />
            <Button content='2020년 5월' />
            <Button icon='chevron right' />
          </Button.Group>
        </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Selection />
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search task...' />
        </Menu.Item>
        <Menu.Item>
          <Button onClick = {()=>googleLogin()}>
            <Button.Content>
              <Icon name='user' />Sign-in
            </Button.Content>
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </Container>
  </div>
)
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode:'login',
    }
  }
  render(){
  return (
     <div >
        {/* <h3 className={cs.head}> CALILEO </h3> */}
       {/* <Topblock /> */}
        {/* <CalenderBody /> */}
       <button onClick = {()=>googleLogin()}> googleLogin </button>

      </div>

    );
  }
}
export default App;
