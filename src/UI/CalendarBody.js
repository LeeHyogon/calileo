import React, { Component } from 'react'
import MainCalendarBody from './MainCalendarBody'
import SubCalendarBody from './SubCalendarBody'
import { Grid } from 'semantic-ui-react'
import moment from 'moment'


class CalendarBody extends Component{
  constructor(props) {
    super(props);
   }

  render(){
    return(
      <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={5}>
          <SubCalendarBody />
        </Grid.Column>
        <Grid.Column width={9}>
          <MainCalendarBody
             pivotDay={this.props.pivotDay}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default CalendarBody
