import * as d3 from "d3-format";

import { AreaChart, IChartProps } from "@fluentui/react-charting";
import { Avatar, Button, Text, ToggleButton } from "@fluentui/react-components";
import {
  ArrowMaximize20Regular,
  ArrowRight16Filled,
  ChevronRight20Regular,
  MoreHorizontal32Regular,
  Rocket20Regular,
  Search20Regular,
  Settings20Regular,
  Trophy20Regular,
} from "@fluentui/react-icons";

import { TableModel } from "../../models/tableModel";
import { tableData } from "../../services/chartService";
import {
  chart1Points_30D,
  chart1Points_60D,
  chart1Points_7D,
  chart2Points_30D,
  chart2Points_60D,
  chart2Points_7D,
} from "../../services/sampleRequest";
import { Widget } from "../lib/Widget";
import { footerBtnStyle, headerStyleWithoutIcon } from "../lib/Widget.styles";
import {
  actionLayout,
  areaChartLayout,
  areaChartStyle,
  avatarStyle,
  backlogStyle,
  divider,
  legendBoldStyle,
  legendDividerStyle,
  legendItemLayout,
  legendLayout,
  legendNormalStyle,
  stateLayout,
  stateStyle,
  tableColumnStyle,
  tableHeaderStyle,
  tableLayout,
  timeSpanLayout,
  timeSpanStyle,
  titleStyle,
} from "../styles/Chart.style";
import ProgressBar from "../components/Progress";

enum DayRange {
  Seven,
  Thirty,
  Sixty,
}

interface IChartWidgetState {
  dayRange: DayRange;
  chartProps: IChartProps;
}

export class Chart extends Widget<IChartWidgetState> {
  async getData(): Promise<IChartWidgetState> {
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
    return {
      dayRange: DayRange.Seven,
      chartProps: chartData,
    };
  }

  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerStyleWithoutIcon}>
        <Text style={areaChartStyle}>Area chart</Text>
        <div style={actionLayout}>
          <Button icon={<Search20Regular />} appearance="transparent" />
          <Button icon={<ArrowMaximize20Regular />} appearance="transparent" />
          <Button icon={<Settings20Regular />} appearance="transparent" />
          <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
        </div>
      </div>
    );
  }

  bodyContent(): JSX.Element | undefined {
    return (
      <>
        <div style={legendLayout}>
          <div style={legendItemLayout}>
            <Text style={legendBoldStyle}>Feb 1, 2020</Text>
            <Text style={legendNormalStyle}>11:59 am (PT)</Text>
          </div>
          <div style={legendDividerStyle} />
          <div style={legendItemLayout}>
            <Text style={legendNormalStyle}>Location:</Text>
            <Text style={legendBoldStyle}>All</Text>
          </div>
          <div style={legendDividerStyle} />
          <div style={legendItemLayout}>
            <Text style={legendNormalStyle}>Groups:</Text>
            <Text style={legendBoldStyle}>All</Text>
          </div>
          <div style={legendDividerStyle} />
          <div style={legendItemLayout}>
            <Text style={legendNormalStyle}>Date range:</Text>
            <Text style={legendBoldStyle}>Jan 1, 2020 - Jan 30, 2020</Text>
          </div>
        </div>
        <div style={timeSpanLayout}>
          <ToggleButton
            appearance="transparent"
            checked={this.state.data?.dayRange === DayRange.Seven}
            style={timeSpanStyle}
            onClick={() =>
              this.setState({
                data: {
                  chartProps: this.retriveChartsData(DayRange.Seven),
                  dayRange: DayRange.Seven,
                },
              })
            }
          >
            7 Days
          </ToggleButton>
          <ToggleButton
            appearance="transparent"
            checked={this.state.data?.dayRange === DayRange.Thirty}
            style={timeSpanStyle}
            onClick={() =>
              this.setState({
                data: {
                  chartProps: this.retriveChartsData(DayRange.Thirty),
                  dayRange: DayRange.Thirty,
                },
              })
            }
          >
            30 Days
          </ToggleButton>
          <ToggleButton
            appearance="transparent"
            checked={this.state.data?.dayRange === DayRange.Sixty}
            style={timeSpanStyle}
            onClick={() =>
              this.setState({
                data: {
                  chartProps: this.retriveChartsData(DayRange.Sixty),
                  dayRange: DayRange.Sixty,
                },
              })
            }
          >
            60 Days
          </ToggleButton>
        </div>

        <div style={areaChartLayout}>
          {this.state.data?.chartProps && (
            <AreaChart
              data={this.state.data.chartProps}
              legendsOverflowText={"Overflow Items"}
              yAxisTickFormat={d3.format(".1s")}
              wrapXAxisLables={false}
              legendProps={{
                allowFocusOnLegends: true,
              }}
            />
          )}
        </div>

        <div style={tableLayout}>
          <Text style={backlogStyle}>Features backlog (57)</Text>
          <div style={tableColumnStyle}>
            <Text style={tableHeaderStyle}>Title</Text>
            <Text style={tableHeaderStyle}>Assigned To</Text>
            <Text style={tableHeaderStyle}>PM Owner</Text>
            <Text style={tableHeaderStyle}>Priority</Text>
            <Text style={tableHeaderStyle}>State</Text>
          </div>
          {tableData.map((item: TableModel, index) => {
            return (
              <>
                {index !== 0 && <div key={`table-divider-${item.id}`} style={divider} />}
                <div key={`table-column-${item.id}`} style={tableColumnStyle}>
                  <div key={`table-title-${item.id}`} style={titleStyle}>
                    <ChevronRight20Regular key={`chevron-${item.id}`} />
                    {index !== 3 ? (
                      <Rocket20Regular key={`rocket-${item.id}`} />
                    ) : (
                      <Trophy20Regular key={`trophy-${item.id}`} />
                    )}
                    <Text key={`title-${item.id}`}>{item.title}</Text>
                  </div>

                  <div key={`table-avatar-${item.id}`} style={avatarStyle}>
                    <Avatar
                      key={`avatar-${item.id}`}
                      name="John Doe"
                      image={{ src: `${item.avatar}` }}
                      size={16}
                    />
                    <Text key={`name-${item.id}`}>{item.name}</Text>
                  </div>
                  <div key={`table-avatar-two-${item.id}`} style={avatarStyle}>
                    <Avatar
                      key={`avatar-two-${item.id}`}
                      name="John Doe"
                      image={{ src: `${item.avatar}` }}
                      size={16}
                    />
                    <Text key={`name-two-${item.id}`}>{item.name}</Text>
                  </div>
                  <Text key={`priority-${item.id}`}>{item.priority}</Text>
                  <div key={`state-${item.id}`} style={stateLayout}>
                    <ProgressBar
                      key={`progress-${item.id}`}
                      bgcolor={item.color}
                      completed={item.state}
                    />
                    <Text key={`progress-text-${item.id}`} style={stateStyle}>
                      {`${item.state}%`}
                    </Text>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }

  footerContent(): JSX.Element | undefined {
    return (
      <Button
        appearance="transparent"
        icon={<ArrowRight16Filled />}
        iconPosition="after"
        size="small"
        style={footerBtnStyle}
        onClick={() => {}} // navigate to detailed page
      >
        View query
      </Button>
    );
  }

  private retriveChartsData(r: DayRange): IChartProps {
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
