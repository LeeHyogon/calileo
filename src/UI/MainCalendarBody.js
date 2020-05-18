import React, { Component } from 'react'
import { Grid, Menu, Table, Segment,Checkbox, Icon, Button } from 'semantic-ui-react'
import moment from 'moment'
import Moment from 'react-moment';

function Datetitle(startday){
  // 넘겨준 값이 오늘 날짜로 변함. 왜그런지 모르겠음.
  // alert(moment(startday).format("YYYY/MM/DD"));
  var _datetitle;
  _datetitle=<Table.Header>
    <Table.HeaderCell width={2}>Sun
      <br></br><Moment format="DD" >
              {startday}
      </Moment>
    </Table.HeaderCell>
    <Table.HeaderCell width={2}>Mun
      <br></br><Moment format="DD"add={{days:1}}  >
              {startday}
        </Moment>
    </Table.HeaderCell>
    <Table.HeaderCell width={2}>Tue
      <br></br><Moment format="DD"add={{days:2} } >
              {startday}
      </Moment>
    </Table.HeaderCell>
    <Table.HeaderCell width={2} >Wed
      <br></br><Moment format="DD"add={{days:3}} >
              {startday}
      </Moment>
    </Table.HeaderCell>
    <Table.HeaderCell width={2}>Thu
      <br></br><Moment format="DD" add={{days:4}}>
              {startday}
      </Moment>
    </Table.HeaderCell>
    <Table.HeaderCell width={2}>Fri
      <br></br><Moment format="DD"add={{days:5}} >
              {startday}
      </Moment>
    </Table.HeaderCell>
    <Table.HeaderCell width={2}>Sat
      <br></br><Moment format="DD"add={{days:6}} >
              {startday}
      </Moment>
    </Table.HeaderCell>
  </Table.Header>
  return _datetitle;
};

class MainCalendarBody extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Table celled >
        {Datetitle(this.props.startday)}
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
          
        </Table.Body>
      </Table>
    );
  }
}

export default MainCalendarBody
