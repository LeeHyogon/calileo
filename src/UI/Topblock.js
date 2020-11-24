import React, {Component} from 'react';
import moment from 'moment'
import _ from 'lodash'
import { Container,Button, Grid, Icon, Menu, Input, Dropdown } from 'semantic-ui-react'
const friendOptions = [

  {
    key: '1',
    text: 'Y',
    value: 'Y',
  },
  {
    key: '2',
    text: 'M',
    value: 'M',
  },
  {
    key: '3',
    text: 'W',
    value: 'w',
  },
  {
    key: '4',
    text: 'D',
    value: 'd',
  },
]

class Topblock extends Component{
  constructor(props){
    super(props)
    this.state = {
      options : friendOptions,
      value : 'w'
    }
  }
  valueChange = (e, {value}) =>{ {this.setState({ value });
    console.log(value);
  }

  }

  render(){
    const {userName, pivotDay, changePivotDay, changetimeUnit } = this.props
    const {value, options} = this.state
    return(
      <div>
      <Container>
        <Grid>
          <Grid.Column computer={8} tablet={16} mobile={16}
                    floated='left'
          >
            <Menu secondary compact>
              <Menu.Menu>
                <Menu.Item>
                  <Button basic>
                    <Button.Content>
                      <Icon name='list ul' />
                    </Button.Content>
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button basic>
                    <Button.Content>
                      <Icon name='save outline' />
                    </Button.Content>
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button.Group basic >
                    <Button icon='chevron left'  onClick = {()=>this.props.changePivotDay(moment(this.props.pivotDay).subtract(1, this.state.value))}/>
                    <Button content={moment(this.props.pivotDay).format("YYYY년 MM월")} />
                    <Button icon='chevron right' onClick = {()=>this.props.changePivotDay(moment(this.props.pivotDay).add(1, this.state.value))} />
                  </Button.Group>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Grid.Column>
          <Grid.Column computer={8} tablet={16} mobile={16}
                      floated='right'
          >
            <Menu secondary compact>
              <Menu.Menu>
                <Menu.Item>
                  <Dropdown
                    placeholder='Select Date'
                    fluid
                    selection
                    options={friendOptions}
                    value = {value}
                    onChange = {this.valueChange}
                    // onChange ={()=>this.props.changetimeUnit(this.state.value)}
                    //timeunit을 바꾼 것을 value에 전달
                    onClick = {()=>this.props.changetimeUnit(this.state.value)}
                    //바뀐 value를 함수를 통해  main.js로 보냄
                  />
                </Menu.Item>
                <Menu.Item>
                  <Input icon='search' placeholder='Search task...' />
                </Menu.Item>
                <Menu.Item>
                  <Button>
                    <Button.Content>
                      <Icon name='user' />{this.props.userName}
                    </Button.Content>
                  </Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Grid.Column>
        </Grid>
      </Container>
      </div>
    )
  }
}


export default Topblock
