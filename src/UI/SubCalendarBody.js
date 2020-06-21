import React, {Component} from 'react'
import { Grid, Menu, Table, Segment,Checkbox, Icon, Button } from 'semantic-ui-react'
import _ from "lodash"
class SubCalendarBody extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
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
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}

export default SubCalendarBody
