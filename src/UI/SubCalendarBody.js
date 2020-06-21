import React, {Component} from 'react'
import { Grid, Menu, Table, Segment,Checkbox, Icon, Button } from 'semantic-ui-react'
import _ from "lodash"
import timedata from "../TIMEDATA/timedata.json"
class SubCalendarBody extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
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
            
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}

export default SubCalendarBody