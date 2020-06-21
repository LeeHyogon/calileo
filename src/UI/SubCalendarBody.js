import React, {Component} from 'react'
import { Grid, Menu, Table, Segment,Checkbox, Icon, Button } from 'semantic-ui-react'
import _ from "lodash"
<<<<<<< HEAD
import timedata from "../TIMEDATA/timedata.json"
=======
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
class SubCalendarBody extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
<<<<<<< HEAD
    const {subCalendarIndex} = this.props;
    var startTime=[];
    var endTime=[];
    var eventDetail=[];
    var isChild;
    startTime=_.map(timedata.users,'startTime');
    endTime=_.map(timedata.users,'endTime');
    eventDetail=_.map(timedata.users,'eventDetail');
    isChild=_.map(timedata.users,'isChild');
    return(
      <Segment>
        <div>
          { <p>{`${eventDetail[subCalendarIndex]}`} </p>}
        </div>
        <Menu fluid vertical>
          <Menu.Item onClick>
            {
            _.map(isChild[subCalendarIndex], val => (
              <p>Start time : {` ${val.startTime} `} <br></br>
              End time : {` ${val.endTime} `} <br></br>
              eventDetail: {` ${val.eventDetail} `}
              </p>
            ))}
            
=======
    const {eventList} = this.props;
    return(
      <Segment>
        <div>
          {_.map(eventList, val => (
              <p>{`${val.eventDetail}`} </p>
          ))}
        </div>
        <Menu fluid vertical>
          <Menu.Item onClick>
            {_.map(eventList, val => (
              <p>Start time : {` ${val.startTime} `} </p>
            ))}
            {_.map(eventList, val => (
              <p>End time : {` ${val.endTime} `} </p>
            ))}
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}

export default SubCalendarBody