import React, {Component} from 'react'
import { Grid, Menu, Table, Segment,Checkbox, Icon, Button } from 'semantic-ui-react'
import _ from "lodash"
import moment from "moment";
import timedata from "../TIMEDATA/timedata.json"

class SubCalendarBody extends Component{
  constructor(props){
    super(props);
    this.state = {
      subCalendarIndex :this.props.subCalendarIndex,
      checked: this.props.isCheck,
    };
  }

  handleChange = (e) => {
    const { target: { checked } } = e;
    var Chk=checked;
    // console.log(this.props.subCalendarIndex);
    // console.log(timedata.users[this.props.subCalendarIndex]);
    // timedata.users[this.props.subCalendarIndex].viewChild=checked;
    this.setState({ checked });
  };
  render(){
    const {subCalendarIndex,isCheck} = this.props;
    //console.log(this.props.isCheck+"isCheck");
    // this.setState({subCalendarIndex: this.props.subCalendarIndex});
    var startTime=[];
    var endTime=[];
    var eventDetail=[];
    var isChild,viewChild;
    startTime=_.map(timedata.tree,'startTime');
    endTime=_.map(timedata.tree,'endTime');
    eventDetail=_.map(timedata.tree,'eventDetail');
    isChild=_.map(timedata.tree,'tree');
    viewChild=_.map(timedata.tree,'viewChild');
    return(
      <Segment>
        <div>
          { <p>{`${eventDetail[subCalendarIndex]}`} </p>}
          <button onClick={()=>this.props.createSubNew(moment(startTime[subCalendarIndex]))}>세부일정 생성</button>
          <br></br>
          <p>세부일정 보기 
            <input
            name="isGoing"
            type="checkbox"
            checked={this.props.isCheck}
            onChange={()=>this.props.checkChange(this.props.isCheck)}
            onClick={this.handleChange}
            /></p>
          
        </div>
        <Menu fluid vertical>
          <p>Start time : {startTime[subCalendarIndex]}</p>
          <Menu.Item onClick>
            {
            _.map(isChild[subCalendarIndex], val => (
              <p>Start time : {` ${val.startTime} `} <br></br>
              End time : {` ${val.endTime} `} <br></br>
              eventDetail: {` ${val.eventDetail} `}
              </p>
            ))}
            
          </Menu.Item>
          <p>End Time : {endTime[subCalendarIndex]} </p>
        </Menu>
      </Segment>
    )
  }
}

export default SubCalendarBody