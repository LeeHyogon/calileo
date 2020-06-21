import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import { Grid, Menu, Table, Segment, Checkbox, Icon,Button } from "semantic-ui-react";
import styled from "styled-components";
<<<<<<< HEAD
import db from "../server/fb";
=======
import db from "../server/fb"
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
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
  //textAlign:  'center',
  //lineHeight: '60px'
}

const style = {
            height: '60px',
            verticalAlign: 'middle',
            //textAlign:  'center',
            //lineHeight: '60px'
}

const StyledButton = styled.button`
  z-index: 3;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  height: ${props => props.height };
  position: absolute;
  left: ${props => props.left };
  top: ${props => props.top };
  width : ${props => props.top || '19vh'};
`;

<<<<<<< HEAD

// function Button({ content, height, left ,index,createNewSubCal}) {
//   return (
//     <StyledButton 
//       height={height} left={left}
//     >
//       {content}
//     </StyledButton>
//   );
// }

=======
function Button({ content, height, left}) {
  return (
    <StyledButton
      height={height} left={left}
    >
      {content}
    </StyledButton>
  );
}
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e

class MainCalendarBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
<<<<<<< HEAD
    const { createNew,createNewSubCal,pivotDay} = this.props;
=======
    const { eventinfo, eventList ,createNew, pivotDay} = this.props;
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
    var index = 0;
    var startTime=[];
    var endTime=[];
    var eventDetail=[];
<<<<<<< HEAD
    var isChild;
    startTime=_.map(timedata.users,'startTime');
    endTime=_.map(timedata.users,'endTime');
    eventDetail=_.map(timedata.users,'eventDetail');
    isChild=_.map(timedata.users,'isChild');
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
=======
    startTime=_.map(timedata.users,'startTime');
    endTime=_.map(timedata.users,'endTime');
    eventDetail=_.map(timedata.users,'eventDetail');

      db.collection("cities").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        //     let startTIme=doc.data().startTIme;
        //     let endTime=doc.data().endTime;
        //     let eventDetail=doc.data().eventDetail;
        });

    });

>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
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
<<<<<<< HEAD
=======
    const addeventinfo = eventinfo =>{
    }
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
    return (
      <div>  
      <Table celled fixed>
        {Datetitle(pivotDay)}
        <Table.Body>
<<<<<<< HEAD
=======

>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
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
<<<<<<< HEAD
                  var index;
                  startTime.map((v,i) => {
                    if(timeVal.isBetween(moment(startTime[i]),moment(endTime[i]))
                    || timeVal.isSame(startTime[i])
                    ){ChkTime=true;
=======
                  startTime.map((v,i) => {
                    if(timeVal.isBetween(moment(startTime[i]),moment(endTime[i]))
                     || timeVal.isSame(startTime[i])
                     ){ChkTime=true;
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
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
<<<<<<< HEAD
                      index=i;
                    }
                  });
=======
                      eventData = [
                        {'startTime' : startTime[i],
                         'endTime' : endTime[i],
                         'eventDetail' : content
                        }
                      ]
                    }
                  });

                return (
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e

                return (
                  //StartTime을 기준으로 Table Cell에 버튼을 만든다.
                  <Table.Cell
                    selectable
                    verticalAlign="top"
                    onClick={ChkTime ? null : () => createNew(timeVal)}
                  >
                    <div style={style}>
<<<<<<< HEAD
                    {ChkTime2 ?   <Button content={content} height={height} 
                                    onClick={()=>createNewSubCal(index)}
=======
                    {ChkTime2 ?   <Button content={content} height={height}
                                    onClick={()=>{eventinfo = eventData}}
>>>>>>> 727ab70e73879d76ecea866d8000bf739f394f2e
                                  >
                                  </Button>
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
