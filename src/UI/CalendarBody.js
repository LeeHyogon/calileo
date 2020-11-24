import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import MainCalendarBody from "./MainCalendarBody";
import SubCalendarBody from "./SubCalendarBody";
import CreateEvent from "./CreateEvent";
import SubCreateEvent from "./SubCreateEvent";
import {trainedNlp, nlpMain} from "../NLP/nlpMain";
import db from "../server/fb";
import timedata from "../TIMEDATA/timedata.json"
import $ from 'jquery';

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
      isCreateSubNew: false,
      isCreateNewString: false,
      createNewTime: "",
      createSubNewTime: "",
      eventList: [],
      subCalendarIndex: -1,
      checkValue : false
    };
  }
  createNew = props => {
    this.setState({
      isCreateNew: true,
      createNewTime: props.format("YYYY.MM.DD HH:mm")
    });
  };

  //세부일정 생성 버튼
  createSubNew = props => {

    this.setState({
      isCreateSubNew: true,
      createSubNewTime: props.format("YYYY.MM.DD HH:mm")
    });
  };

  //메인캘린더에서 일정 클릭시 서브캘린더에 서브일정 보이게 해줌.
  createNewSubCal = props => {
    var viewChild=_.map(timedata.tree,'viewChild');
    console.log(viewChild[this.state.subCalendarIndex]);
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
  timedata.tree.push({
    startTime: startTime,
    endTime: endTime,
    eventDetail: eventDetail,
    tree: []
  });
  var fs = require('browserify-fs');
  // var path = require('path');
  // var fs = require('fs');
  // fs.writeFile('../TIMEDATA/timedata.json',timedata,'utf-8');
  // fs.writeFile('../TIMEDATA/timedata.json', timedata, function() {
	// 	fs.readFile('../TIMEDATA/timedata.json', 'utf-8', function(err, data) {
	// 		console.log(data);
	// 	});
  // });
  //console.log(process.cwd());
  // console.log(timedata);
  // console.log(path.join(__dirname,'../TIMEDATA')+'/timedata.json');
    // obj = JSON.parse(timedata); //now it an object
    // console.log(obj);
    // obj.users.push({
    //   startTime: startTime,
    //   endTime: endTime,
    //   eventDetail: eventDetail,
    //   isChild : []
    // }); //add some data
    // json = JSON.stringify(json); //convert it back to json
    fs.writeFile('../TIMEDATA/timedata.json', JSON.stringify(timedata), 'utf8'); // write it back

  this.setState({
      eventList: _.concat(this.state.eventList, props),
      isCreateNew: false
    });
  };

  enlistSubNew = props => {
  const { endTime,eventDetail,startTime} = props;
  timedata.tree[this.state.subCalendarIndex].tree.push({
    startTime: startTime,
    endTime: endTime,
    eventDetail: eventDetail,
    tree: []
  })
  this.setState({
      isCreateSubNew: false
    });
  };
  eventClose = props => {
    this.setState({ isCreateNew: false });
  };
  eventSubClose = props => {
    this.setState({ isCreateSubNew: false });
  };

  //메인캘린더 렌더갱신해서 checkbox체크시 메인캘린더 구성 갱신하는 효과주기위해 넣음.
  //checkValue는 의미없는값.
  checkChange =checked =>{
    // console.log(checked);
    // console.log(timedata.users[this.state.subCalendarIndex]);
    // timedata.users[this.state.subCalendarIndex].viewChild=checked;
    timedata.tree[this.state.subCalendarIndex].viewChild=!checked;
    this.setState({checkValue: !this.state.checkValue});
  };
  render() {
    console.log(timedata);
    var viewChild=_.map(timedata.tree,'viewChild');
    return (
      <Grid column="equal">
        <Grid.Column computer={6} tablet={16} mobile={16} floated="left">
        {this.state.isCreateSubNew ? (
              <SubCreateEvent
                createSubNewTime={this.state.createSubNewTime}
                eventSubClose={this.eventSubClose}
                enlistSubNew={this.enlistSubNew}
              />
            ) : null}
          <SubCalendarBody
          subCalendarIndex={this.state.subCalendarIndex}
          createSubNew={this.createSubNew}
          isCheck={viewChild[this.state.subCalendarIndex]}
          checkChange={this.checkChange}
          >

          </SubCalendarBody>
          
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
            timeUnit={this.props.timeUnit} //main.js에서 받아와서 이거에 따라 maincalendar가 다르게 보여지도록 구현할 예정입니다.
            checkValue={this.state.checkValue}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default CalendarBody;
