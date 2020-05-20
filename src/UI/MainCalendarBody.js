import React, { Component } from 'react'
import moment from 'moment'
import _ from "lodash"

import { Grid, Menu, Table, Segment,Checkbox, Icon, Button } from 'semantic-ui-react'

function Datetitle(props){
  return <Table.Header>{_.map(Array(7),(val, index)=>    
      <Table.HeaderCell width={2}>{moment(props).add(index, 'd').format("MM/DD(ddd)")}
      </Table.HeaderCell>)}
  </Table.Header>
};

class MainCalendarBody extends Component{
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }
  
  render(){
    var index=this.props.eventCnt; var i=0;
    //시작,종료시간 저장 배열
    var startTime=new Array(); 
    var endTime=new Array();
    console.log(this.props);
    while(i<index){
      startTime[i]=moment(this.props.eventList[i].startTime);
      endTime[i]=moment(this.props.eventList[i].endTime);
      i+=1;
    }
    return(
      <Table celled >
        {Datetitle(this.props.pivotDay)}
        <Table.Body>
        {_.map(Array(24), (val, timeIndex)=>(          
                  <Table.Row >
                  {_.map(Array(7), (val2, dayIndex) =>{
                    let timeVal = moment(this.props.pivotDay).add(dayIndex, 'd').add(timeIndex, 'h');
                    i=0;
                    var ChkTime=false;
                    while(i<index){
                      if(timeVal.isBetween(moment(startTime[i],"YYYY:DD:HH" ),moment(endTime[i],"YYYY:DD:HH"))
                      || timeVal.isSame(startTime[i],"YYYY:DD:HH")
                      || timeVal.isSame(endTime[i],"YYYY:DD:HH")
                      ){
                        ChkTime=true
                      }
                      i+=1;
                    }
                    return(
                      <Table.Cell style={{backgroundColor : ChkTime ?'blue': 'white'}}
                                    selectable verticalAlign='top' onClick = {()=>this.props.createNew(timeVal)
                                    
                      } >
                      {timeVal.format("HH:mm")}</Table.Cell>)

                  })}
                  </Table.Row>))}
        </Table.Body>
        {/* {JSON.stringify(this.props.eventList)} */}
      </Table>
      
    );
  }
}

export default MainCalendarBody
