import React from 'react'
import { Grid, Menu, Table, Segment,Checkbox, Icon, Button } from 'semantic-ui-react'

const CalenderBody = () => (
  <Grid>
    <Grid.Column width={1}>
    </Grid.Column>
    <Grid.Column width={5}>
    <Segment>
      <p>task1</p>
      <Menu fluid vertical>
          <Menu.Item><Checkbox label='subtask1' /></Menu.Item>
          <Menu.Item><Checkbox label='subtask2' /></Menu.Item>
          <Menu.Item><Checkbox label='subtask3' /></Menu.Item>
      </Menu>
      <Menu secondary>
        <Menu.Menu position='right'>
          <Button basic icon>
            <Icon name='plus square outline' />
          </Button>
        </Menu.Menu>
      </Menu>
    </Segment>
    </Grid.Column>
    <Grid.Column width={9}>
      <Table celled >
        <Table.Header>
          <Table.HeaderCell width={2}>Sun</Table.HeaderCell>
          <Table.HeaderCell width={2}>Mun</Table.HeaderCell>
          <Table.HeaderCell width={2}>Tue</Table.HeaderCell>
          <Table.HeaderCell width={2}>Wed</Table.HeaderCell>
          <Table.HeaderCell width={2}>Thu</Table.HeaderCell>
          <Table.HeaderCell width={2}>Fri</Table.HeaderCell>
          <Table.HeaderCell width={2}>Sat</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
          </Table.Row><Table.Row>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
            <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Menu secondary>
        <Menu.Menu position='right'>
          <Button basic icon>
            <Icon name='plus square outline' />
          </Button>
        </Menu.Menu>
      </Menu>
    </Grid.Column>
  </Grid>
)

export default CalenderBody
