import * as d3 from "d3-format";

import { AreaChart, IChartProps } from "@fluentui/react-charting";
import { ArrowRight24Filled, DataPieRegular } from "@fluentui/react-icons";
import {
  Button,
  Menu,
  menuAsToolbarBehavior,
  MoreIcon,
  Text,
} from "@fluentui/react-northstar";

import {
  chart1Points_30D,
  chart1Points_60D,
  chart1Points_7D,
  chart2Points_30D,
  chart2Points_60D,
  chart2Points_7D,
} from "../../services/sampleRequest";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";

enum DayRange {
  Seven,
  Thirty,
  Sixty,
}

export class Chart extends Widget<IChartProps> {
  protected getData(): IChartProps | undefined {
    const chartPoints = [
      {
        legend: "Line 1",
        data: chart1Points_7D,
        color: "#6264A7",
      },
      {
        legend: "Line 2",
        data: chart2Points_7D,
        color: "#D9DBDB",
      },
    ];
    const chartData = {
      chartTitle: "Area chart multiple example",
      lineChartData: chartPoints,
    };
    return chartData;
  }

  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle()}>
        <DataPieRegular style={{ height: "1.5rem", width: "1.5rem" }} />
        <Text style={headerTextStyle()} content="Area chart" />
        <Button icon={<MoreIcon size="large" />} iconOnly text title="more" />
      </div>
    );
  }

  bodyContent(): JSX.Element | undefined {
    return (
      <>
        <div>
          <Menu
            style={{ gap: "3rem" }}
            defaultActiveIndex={0}
            items={[
              {
                key: "1",
                content: "7 days",
                onClick: () =>
                  this.setState({
                    data: this.retriveChartsData(DayRange.Seven),
                  }),
              },
              {
                key: "2",
                content: "30 days",
                onClick: () =>
                  this.setState({
                    data: this.retriveChartsData(DayRange.Thirty),
                  }),
              },
              {
                key: "3",
                content: "60 days",
                onClick: () =>
                  this.setState({
                    data: this.retriveChartsData(DayRange.Sixty),
                  }),
              },
            ]}
            iconOnly
            accessibility={menuAsToolbarBehavior}
          />
        </div>

        <div style={{ position: "relative", height: "200px", width: "100%" }}>
          {this.state.data && (
            <AreaChart
              data={this.state.data}
              legendsOverflowText={"Overflow Items"}
              yAxisTickFormat={d3.format(".1s")}
              wrapXAxisLables={false}
              legendProps={{
                allowFocusOnLegends: true,
              }}
            />
          )}
        </div>
      </>
    );
  }

  footerContent(): JSX.Element | undefined {
    return (
      <Button
        primary
        text
        icon={<ArrowRight24Filled />}
        iconPosition="after"
        content="View details"
        size="small"
        style={{ width: "fit-content" }}
        onClick={() => {}} // navigate to detailed page
      />
    );
  }

  private retriveChartsData(r: DayRange): IChartProps | undefined {
    const chartPoints = [
      {
        legend: "Line 1",
        data:
          r === DayRange.Seven
            ? chart1Points_7D
            : r === DayRange.Thirty
            ? chart1Points_30D
            : chart1Points_60D,
        color: "#6264A7",
      },
      {
        legend: "Line 2",
        data:
          r === DayRange.Seven
            ? chart2Points_7D
            : r === DayRange.Thirty
            ? chart2Points_30D
            : chart2Points_60D,
        color: "#D9DBDB",
      },
    ];
    const chartData = {
      chartTitle: "Area chart multiple example",
      lineChartData: chartPoints,
    };
    return chartData;
  }
}
