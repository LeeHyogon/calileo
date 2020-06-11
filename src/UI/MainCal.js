import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import { Table, Tab, } from "semantic-ui-react";


const panes = [
  { menuItem: 'Y',
    pane: (
      <Tab.Pane key='Y'>
        <Table celled padded size='large'>
          <Table.Body>
            <Table.Row>
              {_.map(Array(4), (val, index) => (
                <Table.Cell
                  selectable
                  textAlign='center'
                >
                  {moment(pivotDay)
                    .add(index, "Y")
                    .format("YYYY년")}
                </Table.Cell>
              ))}
            </Table.Row>
          </Table.Body>
        </Table>
      </Tab.Pane>
    )
  },
  { menuItem: 'M',
    pane: (
      <Tab.Pane key='M'>

      </Tab.Pane>
    )
  },
  { menuItem: 'W',
    pane: (
      <Tab.Pane key='W'>
        <Table celled fixed>
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
                    //StartTime을 기준으로 Table Cell에 버튼을 만든다.
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
      </Tab.Pane>
    )
  },
  { menuItem: 'D',
    pane: (
      <Tab.Pane key='D'>

      </Tab.Pane>
    )
  },
]

class MainCal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (e, data) => this.setState(data)

  render() {
    return (
      <div>
      <Tab panes={panes}
           renderActiveOnly={false}
           defaultActiveIndex={2}
           onTabChange={this.handleChange}
      />
      </div>
    )
  }
}


export default MainCal;
