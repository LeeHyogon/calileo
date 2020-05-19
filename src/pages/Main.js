import React, { Component} from "react";
import moment from 'moment'

import CalendarBody from "../UI/CalendarBody"
import Topblock from "../UI/Topblock"

class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      pivotDay : moment().startOf("week").format("YYYYMMDD")
    }
  }

  changePivotDay = (newPivot) => {
    this.setState({pivotDay : newPivot})
  }

  render(){
    return(
      <div>
      <Topblock userName = {this.props.userName} pivotDay = {this.state.pivotDay}
      changePivotDay = {this.changePivotDay}/>
      <CalendarBody pivotDay = {this.state.pivotDay}/>
      </div>
    )
  }
}

export default Main
