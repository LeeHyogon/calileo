import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import MainCalendarBody from "./MainCalendarBody";
import SubCalendarBody from "./SubCalendarBody";
import CreateEvent from "./CreateEvent";
import nlpMain from "../NLP/nlpMain"

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
          value = {this.state.eventString}
        />
        <Button primary onClick = {() => nlpMain(this.state.eventString)}>등록</Button>{" "}
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
      eventList: []
    };
  }

  createNew = props => {
    this.setState({
      isCreateNew: true,
      createNewTime: props.format("YYYY.MM.DD HH:mm")
    });
  };

  createNewString = props => {
    this.setState({ isCreateNewString: true });
  };


  enlistNew = props => {
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
      <Grid column='equal'>
        <Grid.Column computer={6} tablet={16} mobile={16}
                    floated='left'
        >
          <SubCalendarBody />
          {_.map(this.state.eventList, val => (
            <p>{`${val.eventDetail} ${val.startTime}~${val.endTime}`} </p>
          ))}
        </Grid.Column>
        <Grid.Column computer={10} tablet={16} mobile={16}
        floated='right'>
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
            createNewString={this.createNewString}
            pivotDay={this.props.pivotDay}
            eventList={this.state.eventList}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default CalendarBody;
