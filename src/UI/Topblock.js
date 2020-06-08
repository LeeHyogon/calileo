import React from 'react';
import moment from 'moment'

import { Container,Button, Grid, Icon, Menu, Input, Dropdown } from 'semantic-ui-react'
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
            <Button.Group basic size='big' >
              <Button icon='chevron left'  onClick = {()=>props.changePivotDay(moment(props.pivotDay).subtract(1, "w"))}/>
              <Button content={moment(props.pivotDay).format("YYYY년 MM월")} />
              <Button icon='chevron right' onClick = {()=>props.changePivotDay(moment(props.pivotDay).add(1, "w"))} />
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
        {/*Y M W D */}
        <Menu.Item>
          <Selection
          //실행안됨
          onChange={()=>props.changetimeUnit() }
           />
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
  </Grid.Column>
  </Grid>
  </Container>
  </div>
)


export default Topblock
