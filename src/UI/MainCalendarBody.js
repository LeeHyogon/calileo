import React from 'react'
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
    const {createNew,pivotDay, eventList ,eventCnt}=this.props;
    var index=this.props.eventCnt;
    var startTime=[];
    var endTime=[];
    //console.log(this.props);
     startTime=_.map(eventList,'startTime');
     endTime=_.map(eventList,'endTime');
    return(
      <Table celled >
        {Datetitle(pivotDay)}
        <Table.Body>
        {_.map(Array(24), (val, timeIndex)=>(
                  <Table.Row >
                  {_.map(Array(7), (val2, dayIndex) =>{
                    let timeVal = moment(pivotDay).add(dayIndex, 'd').add(timeIndex, 'h');
                    var i=0;
                    var ChkTime=false;
                    while(i<index){
                       //let diff=moment.duration(moment(endTime[i],"YYYY-MM-DD").diff(moment(startTime[i],"YYYY-MM-DD"))).asDays();
                      if(timeVal.isBetween(moment(startTime[i]),moment(endTime[i]))
                      || timeVal.isSame(startTime[i])
                      || timeVal.isSame(endTime[i])
                      ){ ChkTime=true}
                      i+=1;
                    }
                    return(
                      <Table.Cell style={{backgroundColor : ChkTime ?'yellow': 'white'}}
                                    selectable verticalAlign='top' onClick = {()=>createNew(timeVal)
                      } >
                        {/* {ChkTime ? <Button>{timeVal.format("HH:mm")}</Button>: timeVal.format("HH:mm")} */}
                        {timeVal.format("HH:mm")}
                      </Table.Cell>)

                  })}
                  </Table.Row>))}
        </Table.Body>
        {/* {JSON.stringify(this.props.eventList)} */}
      </Table>

    );
  }
}

export default MainCalendarBody
