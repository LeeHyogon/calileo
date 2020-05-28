import React, { Component } from 'react'
import { Button, Grid, Header, Segment, Portal, Input } from 'semantic-ui-react'

class CreateEvent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate :this.props.createNewTime,
      // moment(this.props.createNewTime).add(1,'h').format("YYYY.MM.DD MM:SS")
        endDate :"",
        eventDetail : "",
        open: true
    }
   }
handleClose = () => {this.props.eventClose()}
handleConfirm = () => {
this.props.enlistNew({eventDetail :this.state.eventDetail, startTime : this.state.startDate, endTime : this.state.endDate})
}
makeEvent = e => {
  this.setState({[e.target.name] : e.target.value})
}
  render(){  
    return(
    <Grid columns={2}>
    <Grid.Column>
      <Portal  open={this.state.open}>
        <Segment
          style={{
            left: '30%',
            position: 'fixed',
            top: '50%',
            zIndex: 10,
          }}
        >
          <Header>Task</Header>
          <p>input time</p>
          <div>
            <Input name = "startDate" placeholder = "StartDate" value = {this.state.startDate}
            onChange = {e=> this.makeEvent(e)}/>
            <Input name = "endDate" placeholder = "EndDate" value = {this.state.endDate}   onChange = {e=> this.makeEvent(e)}/>
            <Input name = "eventDetail" placeholder = "EventDetail" value = {this.state.eventDetail}  onChange = {e=> this.makeEvent(e)}/>
          </div>
            <Button
              onClick={this.handleClose}
              negative
              content = 'close'
            />
            <Button
              onClick = {this.handleConfirm}
              positive
              content = 'CONFIRM'
            />
        </Segment>
      </Portal>
    </Grid.Column>
  </Grid>
    )
  }
}

export default CreateEvent
