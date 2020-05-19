import React, { Component } from 'react'
import moment from 'moment'
import _ from "lodash"

import { Grid, Menu, Table, Segment,Checkbox, Icon, Button } from 'semantic-ui-react'

function Datetitle(props){

  return <Table.Header>{_.map(Array(7),(val, index)=>    <Table.HeaderCell width={2}>{moment(props).add(index, 'd').format("MM/DD(ddd)")}
      </Table.HeaderCell>)}
  </Table.Header>
};

class MainCalendarBody extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Table celled >
        {Datetitle(this.props.pivotDay)}
        <Table.Body>
        {_.map(Array(6), ()=>(          <Table.Row>
                  {_.map(Array(7), () =>
                    <Table.Cell selectable verticalAlign='top'><br /><br /><br /></Table.Cell> )}
                  </Table.Row>))}


        </Table.Body>
      </Table>
    );
  }
}

export default MainCalendarBody
