import "../style/task.css";
import "../style/chart.css";
import "../style/cardLayout.css";

import React from "react";

import { Media, Table, TableProps } from "@fluent-blocks/react";
import { ChartProps } from "@fluent-blocks/schemas";
import { Button, Label, Text, ToggleButton } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import { ArrowRight16Filled } from "@fluentui/react-icons";

import { demoData7, demoData30, demoData60 } from "../data/ChartData";

const tableProps: TableProps = {
  table: {
    columns: {
      c1: { title: "Title" },
      c2: { title: "Partner" },
      c3: { title: "Priority" },
      c4: { title: "State" },
    },
    rows: {
      r1: {
        c1: { cell: "Donec eget fringilla ipsum" },
        c2: { cell: "Sed vitae lacus varius felis" },
        c3: { cell: "1" },
        c4: { cell: "Nullam fermentum laoreet orci" },
      },
      r2: {
        c1: { cell: "Nullam pulvinar varius massa" },
        c2: { cell: "Phasellus vitae nibh nulla. Sed" },
        c3: { cell: "1" },
        c4: { cell: "Aenean finibus facilisis accumsan" },
      },
      r3: {
        c1: { cell: "Nunc id nisl a mi arcu velit" },
        c2: { cell: "Aenean tincidunt neque eu justo" },
        c3: { cell: "2" },
        c4: { cell: "Proin faucibus malesuada maximus" },
      },
      r4: {
        c1: { cell: "Integer auctor nunc accumsan" },
        c2: { cell: "Ut tempor volutpat odio ut" },
        c3: { cell: "3" },
        c4: { cell: "Etiam imperdiet nibh lacus vitae" },
      },
    },
    caption: "",
    rowHeaderColumn: "c1",
    minWidthVariant: "auto",
    maxWidthVariant: "viewportWidth",
    rowsActivable: true,
  },
};

interface IChartState {
  timeSpan?: string;
}

export class ChartCard extends React.Component<{}, IChartState> {
  constructor(prop: any) {
    super(prop);
    this.state = {
      timeSpan: "30D",
    };
  }

  getCharData_7D = (): ChartProps => {
    return {
      label: "line area",
      chart: {
        type: "line-area",
        data: demoData7,
      },
    };
  };

  getCharData_30D = () => {
    const chartProps: ChartProps = {
      label: "line area",
      chart: {
        type: "line-area",
        data: demoData30,
      },
    };
    return chartProps;
  };

  getCharData_60D = () => {
    const chartProps: ChartProps = {
      label: "line area",
      chart: {
        type: "line-area",
        data: demoData60,
      },
    };
    return chartProps;
  };

  render = () => {
    return (
      <Card className="card-stretch">
        <CardHeader
          header={
            <Text
              weight="semibold"
              size={500}
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              Power BI
            </Text>
          }
        />
        <div className="card-content">
          <div className="chart-layout">
            <div className="legend">
              <div>
                <Label weight="semibold">Sept 14, 2022 </Label>
                <Label>11:59 am (PT)</Label>
              </div>
              <div className="legend-divider" />
              <div>
                <Label>Location: </Label>
                <Label weight="semibold">All</Label>
              </div>
              <div className="legend-divider" />
              <div>
                <Label>Groups: </Label>
                <Label weight="semibold">All</Label>
              </div>
              <div>
                <Label>Date range: </Label>
                {this.state.timeSpan === "7D" && (
                  <Label weight="semibold">Aug 1, 2022 - Aug 7, 2022</Label>
                )}
                {this.state.timeSpan === "30D" && (
                  <Label weight="semibold">Aug 1, 2022 - Aug 31, 2022</Label>
                )}
                {this.state.timeSpan === "60D" && (
                  <Label className="legend-font" weight="semibold">
                    Jul 1, 2022 - Aug 31, 2022
                  </Label>
                )}
              </div>
            </div>
            <div className="time-span">
              <ToggleButton
                appearance="transparent"
                checked={this.state.timeSpan === "7D"}
                onClick={() =>
                  this.setState({
                    timeSpan: "7D",
                  })
                }
              >
                7 Days
              </ToggleButton>
              <ToggleButton
                appearance="transparent"
                checked={this.state.timeSpan === "30D"}
                onClick={() => this.setState({ timeSpan: "30D" })}
              >
                30 Days
              </ToggleButton>
              <ToggleButton
                appearance="transparent"
                checked={this.state.timeSpan === "60D"}
                onClick={() => this.setState({ timeSpan: "60D" })}
              >
                60 Days
              </ToggleButton>
            </div>
          </div>
          {this.state.timeSpan === "7D" && <Media {...this.getCharData_7D()} />}
          {this.state.timeSpan === "30D" && (
            <Media {...this.getCharData_30D()} />
          )}
          {this.state.timeSpan === "60D" && (
            <Media {...this.getCharData_60D()} />
          )}
          <Table {...tableProps} />
          <div className="bottom-action">
            <Button
              appearance="transparent"
              size="small"
              icon={<ArrowRight16Filled />}
              iconPosition="after"
              style={{ color: "#5B5FC7" }}
            >
              View query
            </Button>
          </div>
        </div>
      </Card>
    );
  };
}
