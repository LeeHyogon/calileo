import React, { Component} from "react";
import moment from 'moment'
import CalendarBody from "../UI/CalendarBody"
import db from "../server/fb"


class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      pivotDay : moment().startOf("week").format("YYYYMMDD"),
      timeUnit:'W',
      today : moment().format("YYYYMMDD"),
    }
    this.changePivotDay = this.changePivotDay.bind(this);
    this.changetimeUnit = this.changetimeUnit.bind(this);
  }
  changePivotDay = (newPivot) => {
    this.setState({pivotDay : newPivot})
  }
  changetimeUnit = (newUnit) => {
    //console.log(newUnit+"실행확인");
    this.setState({timeUnit : newUnit})
  }
  render(){
    const {userName} = this.props;
    const {pivotDay, timeUnit} = this.state;
    return(
      <div>
        <CalendarBody pivotDay={pivotDay}
              timeUnit={timeUnit}
              userName={userName}
              changePivotDay={this.changePivotDay} 
              changetimeUnit={this.changetimeUnit}/>
      </div>
    )
  }
}

export default Main
