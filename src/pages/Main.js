import React, { Component} from "react";
import CalenderBody from "../UI/CalenderBody"
import Topblock from "../UI/Topblock"

class Main extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
      <Topblock/>
      <CalenderBody/>
      </div>
    )
  }
}

export default Main
