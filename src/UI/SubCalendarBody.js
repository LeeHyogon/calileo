import React, {Component} from 'react'
import { Grid, Menu, Table, Segment,Checkbox, Icon, Button } from 'semantic-ui-react'
import _ from "lodash"
import moment from "moment";
import timedata from "../TIMEDATA/timedata.json"

function findNode(id,currentNode) {
  var result;
  if(id==currentNode.id){
    return currentNode;
  }else{
    for(var index in currentNode.tree){
      var node=currentNode.tree[index];
      result=findNode(id,node);
      if(result!=false){
        return result;
      } 
    }
    return false; 
  }
}
class ListBlock extends Component{
  constructor(props) {
    super(props);
    this.state={
    }  
  }
  hasChildren(node){
    return node.tree &&node.tree.length;
  }
  render(){
    const level=this.props.level || 0;
    return <div>
      {this.props.node.eventDetail}<br></br>
      {this.props.node.startTime}<br></br>
      {this.props.node.tree.map((nodeChild,i)=>{
        return <div>
          {nodeChild.eventDetail} <br></br>
          {nodeChild.startTime}   <br></br>
          {this.hasChildren(nodeChild)&& <ListBlock node={nodeChild} level={level+1} 
          />}
          {nodeChild.endTime}   <br></br>
        </div>
      })}
      {this.props.node.endTime}
    </div>
  }
}

class SubCalendarBody extends Component{
  constructor(props){
    super(props);
    this.state = {
      subCalendarIndex :this.props.subCalendarIndex,
      checked: this.props.isCheck,
    };
  }

  handleChange = (e) => {
    const { target: { checked } } = e;
    var Chk=checked;
    // console.log(this.props.subCalendarIndex);
    // console.log(timedata.users[this.props.subCalendarIndex]);
    // timedata.users[this.props.subCalendarIndex].viewChild=checked;
    this.setState({ checked });
  };
  render(){
    const {subCalendarIndex,isCheck,subCalendarId} = this.props;
    //console.log(this.props.isCheck+"isCheck");
    // this.setState({subCalendarIndex: this.props.subCalendarIndex});
    var startTime=[];
    var endTime=[];
    var eventDetail=[];
    var isChild,viewChild;
    startTime=_.map(timedata.tree,'startTime');
    endTime=_.map(timedata.tree,'endTime');
    eventDetail=_.map(timedata.tree,'eventDetail');
    viewChild=_.map(timedata.tree,'viewChild');
    var node=findNode(subCalendarId,timedata);
    console.log(node);

    return(
      <Segment>
       {node ? <ListBlock node={node} /> : null}
      </Segment>
    )
  }
}

export default SubCalendarBody