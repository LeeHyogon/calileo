import React, { Component } from 'react'
import moment from 'moment'
import _ from "lodash"
import MainCalendarBody from './MainCalendarBody'
import SubCalendarBody from './SubCalendarBody'
import CreateEvent from './CreateEvent'
import { Button, Grid, Header, Segment, Portal, Input } from 'semantic-ui-react'


class CalendarBody extends Component{
  constructor(props) {
    super(props);
    this.state = {
      eventCnt: 0,
      isCreateNew : false,
      createNewTime : "",
      eventList : []
    }
   }

 createNew = (props)=>{
   this.setState({isCreateNew : true, createNewTime:props.format("YYYY.MM.DD HH:mm")})
 }

enlistNew = (props) => {
  this.state.eventCnt+=1;
  this.setState({eventCnt : this.state.eventCnt,eventList : _.concat(this.state.eventList, props), isCreateNew : false} )
}
eventClose = (props) => {
  this.setState({isCreateNew :false})
}
  render(){
    return(
      <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={5}>
          <SubCalendarBody />
          {_.map(this.state.eventList,(val)=> <p>{`${val.eventDetail} ${val.startTime}~${val.endTime}`} </p>)}
        </Grid.Column>
        <Grid.Column width={9}>
        {this.state.isCreateNew ? <CreateEvent createNewTime = {this.state.createNewTime} eventClose={this.eventClose}
        enlistNew = {this.enlistNew}/>: null}
          <MainCalendarBody
            createNew = {this.createNew}
             pivotDay={this.props.pivotDay}
             eventList={this.state.eventList}
             eventCnt={this.state.eventCnt}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default CalendarBody