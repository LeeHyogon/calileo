import React from 'react'
import MainCalendarBody from './MainCalendarBody'
import SubCalendarBody from './SubCalendarBody'
import { Grid } from 'semantic-ui-react'

const CalendarBody = () => (
  <Grid>
    <Grid.Column width={1}>
    </Grid.Column>
    <Grid.Column width={5}>
      <SubCalendarBody />
    </Grid.Column>
    <Grid.Column width={9}>
      <MainCalendarBody />
    </Grid.Column>
  </Grid>
)

export default CalendarBody
