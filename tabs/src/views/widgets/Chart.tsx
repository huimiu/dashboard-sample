import * as d3 from "d3-format";

import { AreaChart, IChartProps } from "@fluentui/react-charting";
import { Avatar, Button, Text, ToggleButton, tokens } from "@fluentui/react-components";
import {
  ArrowMaximize20Regular,
  ArrowRight16Filled,
  ChevronRight20Regular,
  MoreHorizontal16Filled,
  MoreHorizontal32Regular,
  Rocket20Regular,
  Search20Regular,
  Settings20Regular,
  Trophy20Regular,
} from "@fluentui/react-icons";

import { DayRange, DayRangeModel } from "../../models/dayRangeModel";
import { TableModel } from "../../models/tableModel";
import { dayRangeData, tableData } from "../../services/chartService";
import {
  chart1Points_30D,
  chart1Points_60D,
  chart1Points_7D,
  chart2Points_30D,
  chart2Points_60D,
  chart2Points_7D,
} from "../../services/sampleRequest";
import ProgressBar from "../components/Progress";
import { Widget } from "../lib/Widget";
import { footerBtnStyle, headerStyleWithoutIcon } from "../lib/Widget.styles";
import {
  actionLayout,
  areaChartLayout,
  areaChartStyle,
  avatarStyle,
  backlogLayout,
  backlogStyle,
  divider,
  legendBoldStyle,
  legendDividerStyle,
  legendItemLayout,
  legendLayout,
  legendNormalStyle,
  minWidthStyle,
  stateLayout,
  stateStyle,
  tableColumnStyle,
  tableContentLayout,
  tableHeaderStyle,
  tableLayout,
  timeSpanLayout,
  timeSpanStyle,
  titleStyle,
} from "../styles/Chart.style";

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
          {dayRangeData.map((item: DayRangeModel) => {
            return (
              <ToggleButton
                key={`day-range-${item.id}`}
                appearance="transparent"
                checked={this.state.data?.dayRange === item.dayRange}
                style={timeSpanStyle}
                onClick={() =>
                  this.setState({
                    data: {
                      chartProps: this.retriveChartsData(item.dayRange),
                      dayRange: item.dayRange,
                    },
                  })
                }
              >
                {item.displayName}
              </ToggleButton>
            );
          })}
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
                styles: { text: { color: tokens.colorNeutralForeground1 } },
              }}
            />
          )}
        </div>

        <div style={tableLayout}>
          <div style={backlogLayout}>
            <Text style={backlogStyle}>Features backlog (57)</Text>
            <Button icon={<MoreHorizontal16Filled />} appearance="transparent" />
          </div>

          <div style={tableContentLayout}>
            <div style={tableColumnStyle}>
              <Text style={{ ...minWidthStyle(16), ...tableHeaderStyle }}>Title</Text>
              <Text style={{ ...minWidthStyle(8), ...tableHeaderStyle }}>Assigned To</Text>
              <Text style={{ ...minWidthStyle(8), ...tableHeaderStyle }}>PM Owner</Text>
              <Text style={{ ...minWidthStyle(4), ...tableHeaderStyle }}>Priority</Text>
              <Text style={{ ...minWidthStyle(6), ...tableHeaderStyle }}>State</Text>
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
                      <Text key={`title-${item.id}`} wrap={false}>
                        {item.title}
                      </Text>
                    </div>

                    <div key={`table-avatar-${item.id}`} style={avatarStyle}>
                      <Avatar
                        key={`avatar-${item.id}`}
                        name={item.assignedName}
                        image={{ src: `${item.assignedAvatar}` }}
                        size={16}
                      />
                      <Text key={`name-${item.id}`}>{item.assignedName}</Text>
                    </div>
                    <div key={`table-avatar-two-${item.id}`} style={avatarStyle}>
                      <Avatar
                        key={`avatar-two-${item.id}`}
                        name={item.ownerName}
                        image={{ src: `${item.ownerAvatar}` }}
                        size={16}
                      />
                      <Text key={`name-two-${item.id}`}>{item.ownerName}</Text>
                    </div>
                    <Text key={`priority-${item.id}`} style={{ minWidth: "4rem" }}>
                      {item.priority}
                    </Text>
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
