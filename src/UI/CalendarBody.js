import React, { Component } from 'react'
import MainCalendarBody from './MainCalendarBody'
import SubCalendarBody from './SubCalendarBody'
import { Grid } from 'semantic-ui-react'
import moment from 'moment'
import Moment from 'react-moment';
class CalendarBody extends Component{
  constructor(props) {
    super(props);
      var _startday = new Date(2020, 5,1);
      // alert(moment(startday).format("YYYY/MM/DD"));
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
             startday={this._startday} 
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default CalendarBody