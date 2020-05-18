import React from 'react'
import { Button, Grid, Header, Icon, Segment } from 'semantic-ui-react'

const LoginForm = () => (
<Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
  <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='blue' textAlign='center'>
      Log-in to your account
    </Header>
      <Segment stacked>
        <Button color='blue' fluid size='large'>
          <Icon name='google' />Login
        </Button>
      </Segment>
  </Grid.Column>
</Grid>
)

export default LoginForm
