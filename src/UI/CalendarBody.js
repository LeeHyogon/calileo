import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import MainCalendarBody from "./MainCalendarBody";
import SubCalendarBody from "./SubCalendarBody";
import CreateEvent from "./CreateEvent";
import {trainedNlp, nlpMain} from "../NLP/nlpMain";
import db from "../server/fb";
import timedata from "../TIMEDATA/timedata.json"
import * as fs from 'fs';
import {
  Button,
  Grid,
  Header,
  Segment,
  Portal,
  Input
} from "semantic-ui-react";

class CreateStringEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventString: ""
    };
  }

  makeEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Input
          name="eventString"
          fluid
          placeholder="Paste String Here"
          onChange={e => {
            this.makeEvent(e);
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              trainedNlp.then(res => {
                nlpMain(res, this.state.eventString)
              });
            }
          }}
          value={this.state.eventString}
        />
        <Button primary onClick={() =>
          trainedNlp.then(res => {
            nlpMain(res, this.state.eventString)
          })}>
          등록
        </Button>{" "}
      </div>
    );
  }
}

class CalendarBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateNew: false,
      isCreateNewString: false,
      createNewTime: "",
      eventList: [],
<<<<<<< HEAD
      subCalendarIndex: -1,
=======
      eventinfo : []
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
    };
  }

  createNew = props => {
    this.setState({
      isCreateNew: true,
      createNewTime: props.format("YYYY.MM.DD HH:mm")
    });
  };
  createNewSubCal = props => {
    this.setState({ subCalendarIndex: props});
    // if(this.state.subCalendarIndex>=0){
    //   console.log(timedata.users[this.state.subCalendarIndex]);
    // }
    
  };

  createNewString = props => {
    this.setState({ isCreateNewString: true });
  };

  enlistNew = props => {
    //파이어스토어 데이터 생성 구문. 제거 금지!!!!!
    // const { endTime,eventDetail,startTime} = props;
    // db.collection("users").add({
    //   startTime: startTime,
    //   endTime : endTime,
    //   eventDetail: eventDetail,
    //   })
    //   .then(function(docRef) {
    //       console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function(error) {
    //       console.error("Error adding document: ", error);
    //   });
    const { endTime,eventDetail,startTime} = props;
    
  timedata.users.push({
    startTime: startTime,
    endTime: endTime,
    eventDetail: eventDetail,
    isChild: []
  });
  const fs=require('fs');
  // fs.writeFileSync("./timedata.json",timedata,'utf-8');
  var text=fs.readFile('../TIMEDATA/timedata.json');
  
  console.log(text);

  this.setState({
      eventList: _.concat(this.state.eventList, props),
      isCreateNew: false
    });
  };
  eventClose = props => {
    this.setState({ isCreateNew: false });
  };
  render() {
    return (
      <Grid column="equal">
        <Grid.Column computer={6} tablet={16} mobile={16} floated="left">
<<<<<<< HEAD
          <SubCalendarBody subCalendarIndex={this.state.subCalendarIndex}/>
          {_.map(this.state.eventList, val => (
            <p>{`${val.eventDetail} ${val.startTime}~${val.endTime}`} </p>
          ))}
=======
          <SubCalendarBody eventList={this.state.eventList}/>
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
        </Grid.Column>
        <Grid.Column computer={10} tablet={16} mobile={16} floated="right">
          {this.state.isCreateNew ? (
            <CreateEvent
              createNewTime={this.state.createNewTime}
              eventClose={this.eventClose}
              enlistNew={this.enlistNew}
            />
          ) : null}
          {this.state.isCreateNewString ? <CreateStringEvent /> : null}
          <MainCalendarBody
            createNew={this.createNew}
            createNewSubCal={this.createNewSubCal}
            eventClose={this.eventClose}
            createNewString={this.createNewString}
            pivotDay={this.props.pivotDay}
            eventList={this.state.eventList}
<<<<<<< HEAD
=======
            eventinfo={this.state.eventinfo}
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
            timeUnit={this.props.timeUnit} //main.js에서 받아와서 이거에 따라 maincalendar가 다르게 보여지도록 구현할 예정입니다.
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default CalendarBody;
