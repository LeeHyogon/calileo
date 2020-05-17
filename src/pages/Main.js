import React, { Component} from "react";
import CalendarBody from "../UI/CalendarBody"
import Topblock from "../UI/Topblock"

class Main extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
      <Topblock userName = {this.props.userName}/>
      <CalendarBody/>
      </div>
    )
  }
}

export default Main
