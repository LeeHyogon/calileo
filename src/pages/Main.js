import React, { Component} from "react";
import moment from 'moment'
import CalendarBody from "../UI/CalendarBody"
import Topblock from "../UI/Topblock"

class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      pivotDay : moment().startOf("week").format("YYYYMMDD"),
      timeUnit:'w',
      today : moment().format("YYYYMMDD"),
    }
  }

  changePivotDay = (newPivot) => {
    this.setState({pivotDay : newPivot})
  }
  changetimeUnit = (newUnit) => {
    // console.log(newUnit+"실행확인");
    this.setState({timeUnit : newUnit})

  }

  render(){
    return(
      <div>
      <Topblock userName = {this.props.userName} pivotDay = {this.state.pivotDay}
      changePivotDay = {this.changePivotDay}  changetimeUnit = {this.changetimeUnit}/>
      <CalendarBody pivotDay = {this.state.pivotDay} timeUnit = {this.state.timeUnit}/>
      </div>
    )
  }
}

export default Main
