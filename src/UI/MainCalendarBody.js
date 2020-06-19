import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import { Grid, Menu, Table, Segment, Checkbox, Icon } from "semantic-ui-react";
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

const StyledButton = styled.button`
  z-index: 1;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  height: ${props => props.height || "3vh"};
  position: static;
  left: ${props => props.left || "1vw"};
  top: ${props => props.top || "10vh"};
  width: 19.3vh;
`;

function Button({ children, height, left, top }) {
  return (
    <StyledButton height={height} left={left} top={top}>
      {children}
    </StyledButton>
  );
}


class MainCalendarBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { createNew, pivotDay} = this.props;
    var index = 0;
    var startTime=[];
    var endTime=[];
    var eventDetail=[];
    startTime=_.map(timedata.users,'startTime');
    endTime=_.map(timedata.users,'endTime');
    eventDetail=_.map(timedata.users,'eventDetail');

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
          {/* {inputFirestore()}           */}
          {_.map(Array(24), (val, timeIndex) => (
            <Table.Row>
              {_.map(Array(7), (val2, dayIndex) => {
                let timeVal = moment(pivotDay)
                  .add(dayIndex, "d")
                  .add(timeIndex, "h");
                  var ChkTime = false;
                  var i=0;
                  var top,left,height,content;
                  startTime.map((v,i) => {
                    if(timeVal.isBetween(moment(startTime[i]),moment(endTime[i]))
                     || timeVal.isSame(startTime[i])
                     ){ChkTime=true;
                      content = eventDetail[i];
                    }
                  });
          
                return (
                  //StartTime을 기준으로 Table Cell에 버튼을 만든다.
                  <Table.Cell
                    selectable
                    verticalAlign="top"
                    onClick={() => createNew(timeVal)}
                  >
                    {ChkTime ?   <Button >
                                 {content}
                                  </Button> 
                                  : timeVal.format("HH:mm")}
                    

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
