import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import { Grid, Menu, Table, Segment, Checkbox, Icon } from "semantic-ui-react";
import styled from "styled-components";

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
  height: ${props => props.height || '21px'};
  position: absolute;
  left: ${props => props.left || '14px' };
  top: ${props => props.top || '10px'};
  width: 111px;
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
    this.state = {};
  }

  render() {
    const { createNew, pivotDay, eventList} = this.props;
    // startTime=_.map(eventList,'startTime');
    // endTime=_.map(eventList,'endTime');
    const mapToComponent = eventList => {
          var index = eventList.length;
          var startTime = [];
          var endTime = [];
          var eventDetail = [];
          startTime = _.map(eventList, "startTime");
          endTime = _.map(eventList, "endTime");
          eventDetail = _.map(eventList, "eventDetail");//블럭에 일정 내용 들어가도록
          return eventList.map((person, i) => {
            let diff = moment.duration(
                  moment(endTime[i], "YYYY-MM-DD").diff(
                  moment(startTime[i], "YYYY-MM-DD")
                )
              )
              .asDays();
            let top = 20.7*moment(startTime[i]).hour()+60+'px';
            let left = 111.2*moment(startTime[i]).day()+14+'px';
            let height= 20.7*moment.duration(moment(endTime[i]).diff(moment(startTime[i]))).asHours()+'px';
            let content = eventDetail[i];
            //console.log(top + " " + left + " ");
            return (
              <Button
                top={top}
                left={left}
                height={height}
              >
                {content}
              </Button>
        );
      });
    };
    return (
      <div>
      <Table celled>
        {Datetitle(pivotDay)}
        <Table.Body>
          {mapToComponent(eventList)}
          {_.map(Array(24), (val, timeIndex) => (
            <Table.Row>
              {_.map(Array(7), (val2, dayIndex) => {
                let timeVal = moment(pivotDay)
                  .add(dayIndex, "d")
                  .add(timeIndex, "h");
                return (
                  <Table.Cell
                    selectable
                    verticalAlign="top"
                    onClick={() => createNew(timeVal)}
                  >
                   
                    {timeVal.format("HH:mm")}
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