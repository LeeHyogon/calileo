import React from 'react'
import { Grid, Menu, Table, Segment,Checkbox, Icon, Button } from 'semantic-ui-react'

const SubCalenderBody = () =>(
  <Segment>
    <p>task1</p>
    <Menu fluid vertical>
        <Menu.Item><Checkbox label='subtask1' /></Menu.Item>
        <Menu.Item><Checkbox label='subtask2' /></Menu.Item>
        <Menu.Item><Checkbox label='subtask3' /></Menu.Item>
    </Menu>
  </Segment>
)

export default SubCalenderBody
