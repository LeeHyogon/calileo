import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import { Grid, Menu, Table, Segment, Checkbox, Icon} from "semantic-ui-react";
import styled from "styled-components";
import db from "../server/fb";
import timedata from "../TIMEDATA/timedata.json"

function Datetitle(props) {
  return (
    <Table.Header>
      {_.map(Array(7), (val, index) => (
        <Table.HeaderCell width={2}>
          {moment(props)
            .add(index, "d")
            .format("MM/DD(ddd)")}
        </Table.HeaderCell>
      ))}
    </Table.Header>
  );
}
const style = {
  height: '60px',
  verticalAlign: 'middle',
  //textAlign:  'top',
  //lineHeight: '60px'
}

const style2 = {
  height: '60px',
  verticalAlign: 'middle',
  position : 'absolute',
  zindex : '3',
}

const StyledButton = styled.button`
  z-index: 1;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  text-align : left;
  vertical-align : top;
  border: 1px solid lightgray;
  height: ${props => props.height };
  position: ${props => props.position || "absolute" };
  width : ${props => props.width || '19vh'};
`;

class ChildList extends Component  {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const {Childlist ,Chk, content, Start}=this.props;
    console.log(Childlist);
    var result;
    var height, top;
    if(Chk){
       result = Childlist.map((v) => {
         top = 61 * moment
         .duration(moment(Start)
         .diff(moment(v.startTime)))
         .asHours() + 'px';
         height = 61 * moment
         .duration(moment(v.endTime)
         .diff(moment(v.startTime)))
         .asHours() + 'px';
        return (
          <StyledButton height={height} width='16vh' position="static" >{v.eventDetail}</StyledButton>
        )
      });
    }
    return (
      <div>
        {content}
        {result}
      </div>
    )
  }
}

function Button({ content, height, left ,index,createNewSubCal,viewChild,isChild}) {
  return (
    <StyledButton  onClick={()=>createNewSubCal(index)}
      height={height} left={left}
    >
     
      {content}

    </StyledButton>
  );
}

const Member=(tree)=>{
  
  return (
  <button onClick={()=>{
    console.log("Map클릭");
  }}>
    {tree.tree.eventDetail+"Member"}
    </button>
  );
}
class ListBlock extends Component{
  constructor(props) {
    super(props);
    this.state = {
      click : true,
    };
  }
  hasChildren(tree){
    return tree.tree &&tree.tree.length;
  }
  render(){
    var click=true;
    const level=this.props.level || 0;
    // console.log(this.props);
    let eventDetail=this.props.eventDetail;
    return <button style={style2} onClick={()=>{
      if(click){
        console.log(this.props.id);
        this.props.viewSubCal();
      }
    }}>
      {this.props.eventDetail+"ListBlock"}
      {this.props.trees.map((tree,i)=>{
        return <div>
          {/* <Member tree={tree}/> */}
          <button onClick={()=>{
            console.log(tree.id);
            
            this.props.viewSubCal();
          }}>{tree.eventDetail+"underbutton"}</button>
          {this.hasChildren(tree)&& <ListBlock trees={tree.tree}  eventDetail={tree.eventDetail}level={level+1} 
          viewSubCal={()=>this.props.viewSubCal()} id={tree.id}
          />}
        </div>
      })}
    </button>
  }
}
class MainCalendarBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    const { createNew,createNewSubCal,viewSubCal,pivotDay} = this.props;
    var index = 0;
    var startTime=[];
    var endTime=[];
    var eventDetail=[];
    var isChild;
    var id;
    var viewChild=_.map(timedata.tree,'viewChild');
    startTime=_.map(timedata.tree,'startTime');
    endTime=_.map(timedata.tree,'endTime');
    eventDetail=_.map(timedata.tree,'eventDetail');
    isChild=_.map(timedata.tree,'tree');
    id=_.map(timedata.tree,'id');
    const inputFirestore = e => {
      db.collection("users")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // startTime[index] = moment(doc.data().startTime).format("YYYY.MM.DD HH:mm");
            // endTime[index] = moment(doc.data().endTime).format("YYYY.MM.DD HH:mm");
            // eventDetail[index] = doc.data().eventDetail;
            // index += 1;
          });
        });
    };
    // const mapToComponent = eventList => {
    //   startTime = _.map(eventList, "startTime");
    //   endTime = _.map(eventList, "endTime");
    //   eventDetail = _.map(eventList, "eventDetail"); //블럭에 일정 내용 들어가도록
    //   return eventList.map((person, i) => {
    //     let diff = moment
    //       .duration(
    //         moment(endTime[i], "YYYY-MM-DD").diff(
    //           moment(startTime[i], "YYYY-MM-DD")
    //         )
    //       )
    //       .asDays();
    //     let top = 3.9 * moment(startTime[i]).hour() + 10.3 + "vh";
    //     let left = 8.69 * moment(startTime[i]).day() + 1.1 + "vw";
    //     let height =
    //       3.9 *
    //         moment
    //           .duration(moment(endTime[i]).diff(moment(startTime[i])))
    //           .asHours() +
    //       "vh";
    //     let content = eventDetail[i];
    //     //console.log(top + " " + left + " ");
    //     return (
    //       <Button top={top} left={left} height={height}>
    //         {content}
    //       </Button>
    //     );
    //   });
    // };
    
    return (
      <div>  
      <Table celled fixed>
        {Datetitle(pivotDay)}
        <Table.Body>
          {_.map(Array(24), (val, timeIndex) => (
            <Table.Row>
              {_.map(Array(7), (val2, dayIndex) => {
                let timeVal = moment(pivotDay)
                  .add(dayIndex, "d")
                  .add(timeIndex, "h");
                  var ChkTime = false;
                  var ChkTime2 = false;
                  var i=0;
                  var height,width,content;
                  var eventData = [];
                  var index;
                  startTime.map((v,i) => {
                    if(timeVal.isBetween(moment(startTime[i]),moment(endTime[i]))
                    || timeVal.isSame(startTime[i])
                    ){ChkTime=true;
                    }
                    if(timeVal.isSame(startTime[i])
                      ){ChkTime2=true;
                      content = eventDetail[i];
                      height = 61 * moment
                      .duration(moment(endTime[i])
                      .diff(moment(startTime[i])))
                      .asHours() + "px";
                      width = 19.1 + 19.3 * moment
                      .duration(moment(endTime[i])
                      .diff(moment(startTime[i])))
                      .asDays() + 'vh';
                      index=i;
                    }
                  });

                return (
                  //StartTime을 기준으로 Table Cell에 버튼을 만든다.
                  <Table.Cell
                    selectable
                    verticalAlign="top"
                    onClick={ChkTime ? null : () => createNew(timeVal)}
                  >

                    <div style={style}>
                      
                    {/* {ChkTime2 ?   <Button content={viewChild[index] ? <ChildList Start={startTime[i]} content={content} Childlist={isChild[index]} Chk={viewChild[index]}></ChildList> : content} height={height}
                                    createNewSubCal={()=>createNewSubCal(index)}
                                    isChild={isChild}
                                    viewChild={viewChild}
                                  >
                                  </Button>
                                  : timeVal.format("HH:mm")} */}
                  
                    {ChkTime2 ?   <ListBlock trees={timedata.tree[index].tree} eventDetail={eventDetail[index]}
                                  viewSubCal={()=>viewSubCal()}
                                  id={id[index]}
                                  />
                                  : timeVal.format("HH:mm")}
                    </div>
                  </Table.Cell>
                );
              })}
            </Table.Row>
          ))}
          </Table.Body>
      </Table>
      <button onClick = {()=>this.props.createNewString()}> String으로 일정 만들기 </button>

      </div>
    );
  }
}

export default MainCalendarBody;