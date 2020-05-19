import React from 'react';
import moment from 'moment'

import { Container,Button, Icon, Menu, Input, Dropdown } from 'semantic-ui-react'
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
    placeholder='Select Date'
    fluid
    selection
    options={friendOptions}
  />
)

const Topblock = (props) => (
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
            {/* 이 버튼을 누르면 MainCalendar 변환
            어떻게 해야될지? */}
            <Button icon='chevron left'  onClick = {()=>props.changePivotDay(moment(props.pivotDay).subtract(1, "w"))}/>
            <Button content={moment(props.pivotDay).format("YYYY년 MM월")} />
            <Button icon='chevron right' onClick = {()=>props.changePivotDay(moment(props.pivotDay).add(1, "w"))} />
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
          <Button>
            <Button.Content>
              <Icon name='user' />{props.userName}
            </Button.Content>
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </Container>
  </div>
)


export default Topblock
