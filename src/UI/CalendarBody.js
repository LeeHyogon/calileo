import React, { Component } from 'react'
import moment from 'moment'
import _ from "lodash"

import MainCalendarBody from './MainCalendarBody'
import SubCalendarBody from './SubCalendarBody'
import { Grid, Input, Button } from 'semantic-ui-react'

class CreateEvent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate :this.props.createNewTime,
        endDate : "",
          eventDetail : ""
    }
   }

makeEvent = e => {
  this.setState({[e.target.name] : e.target.value})

}


  render(){
    return(<div>
      <Input name = "startDate" placeholder = "StartDate" value = {this.state.startDate}
      onChange = {e=> this.makeEvent(e)}/>
      <Input name = "endDate" placeholder = "EndDate" value = {this.state.endDate}   onChange = {e=> this.makeEvent(e)}/>
      <Input name = "eventDetail" placeholder = "EventDetail" value = {this.state.eventDetail}  onChange = {e=> this.makeEvent(e)}/>
      <Button onClick = {()=>this.props.enlistNew({eventDetail :this.state.eventDetail, startTime : this.state.startDate, endTime : this.state.endDate})} primary>CONFIRM </Button>
      </div>)
  }
}

class CalendarBody extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isCreateNew : false,
      createNewTime : "",
      eventList : []
    }
   }

 createNew = (props)=>{
   this.setState({isCreateNew : true, createNewTime:props.format("YYYY.MM.DD HH:mm")})

 }

enlistNew = (props) => {
  this.setState({eventList : _.concat(this.state.eventList, props), isCreateNew : false} )
}

  render(){
    console.log(this.eventList)
    return(
      <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={5}>
          <SubCalendarBody />
          {_.map(this.state.eventList,(val)=> <p>{`${val.eventDetail} ${val.startTime}~${val.endTime}`} </p>)}
        </Grid.Column>
        <Grid.Column width={9}>
        {this.state.isCreateNew ? <CreateEvent createNewTime = {this.state.createNewTime}
        enlistNew = {this.enlistNew}/>: null}
          <MainCalendarBody
            createNew = {this.createNew}
             pivotDay={this.props.pivotDay}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default CalendarBody
