import React from 'react'
import MainCalenderBody from './MainCalenderBody'
import SubCalenderBody from './SubCalenderBody'
import { Grid } from 'semantic-ui-react'

const CalenderBody = () => (
  <Grid>
    <Grid.Column width={1}>
    </Grid.Column>
    <Grid.Column width={5}>
      <SubCalenderBody />
    </Grid.Column>
    <Grid.Column width={9}>
      <MainCalenderBody />
    </Grid.Column>
  </Grid>
)

export default CalenderBody
