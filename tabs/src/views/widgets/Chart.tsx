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
} from "../../services/chartService";
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
  bodyLayout,
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
import { CSSProperties } from "react";
import { widgetPaddingStyle } from "../styles/Common.styles";

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
      <div key="div-chart-header" style={headerStyleWithoutIcon}>
        <Text key="text-chart-title" style={areaChartStyle}>
          Area chart
        </Text>
        <div key="div-chart-actions" style={actionLayout}>
          <Button key="bt-chart-search" icon={<Search20Regular />} appearance="transparent" />
          <Button key="bt-chart-max" icon={<ArrowMaximize20Regular />} appearance="transparent" />
          <Button key="bt-chart-setting" icon={<Settings20Regular />} appearance="transparent" />
          <Button key="bt-chart-more" icon={<MoreHorizontal32Regular />} appearance="transparent" />
        </div>
      </div>
    );
  }

  bodyContent(): JSX.Element | undefined {
    return (
      <div key="div-chart-body" style={bodyLayout}>
        <div key="div-chart-legend" style={legendLayout}>
          <div key="div-legend-time" style={legendItemLayout}>
            <Text key="text-legend-date" style={legendBoldStyle}>
              Feb 1, 2020
            </Text>
            <Text key="text-legend-time" style={legendNormalStyle}>
              11:59 am (PT)
            </Text>
          </div>
          <div key="div-legend-divider1" style={legendDividerStyle} />
          <div key="div-legend-loc" style={legendItemLayout}>
            <Text key="text-legend-loc" style={legendNormalStyle}>
              Location:
            </Text>
            <Text key="text-legend-loc-all" style={legendBoldStyle}>
              All
            </Text>
          </div>
          <div key="div-legend-divider2" style={legendDividerStyle} />
          <div key="div-legend-groups" style={legendItemLayout}>
            <Text key="text-legend-groups" style={legendNormalStyle}>
              Groups:
            </Text>
            <Text key="text-legend-groups-all" style={legendBoldStyle}>
              All
            </Text>
          </div>
          <div key="div-legend-divider3" style={legendDividerStyle} />
          <div key="div-legend-range" style={legendItemLayout}>
            <Text key="text-legend-range" style={legendNormalStyle}>
              Date range:
            </Text>
            <Text key="text-legend-range-time" style={legendBoldStyle}>
              Jan 1, 2020 - Jan 30, 2020
            </Text>
          </div>
        </div>
        <div key="div-time-span" style={timeSpanLayout}>
          {dayRangeData.map((item: DayRangeModel) => {
            return (
              <ToggleButton
                key={`tb-day-range-${item.id}`}
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

        <div key="div-area-chart" style={areaChartLayout}>
          {this.state.data?.chartProps && (
            <AreaChart
              key={`area-chart-${this.state.data.dayRange}`}
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

        <div key="div-table-layout" style={tableLayout}>
          <div key="div-back-log" style={backlogLayout}>
            <Text key="text-back-log" style={backlogStyle}>
              Features backlog (57)
            </Text>
            <Button
              key="bt-back-log-more"
              icon={<MoreHorizontal16Filled />}
              appearance="transparent"
            />
          </div>

          <div key="div-table-content" style={tableContentLayout}>
            <div key="div-table-column" style={tableColumnStyle}>
              <Text
                key="text-table-header-title"
                style={{ ...minWidthStyle(18), ...tableHeaderStyle }}
              >
                Title
              </Text>
              <Text
                key="text-table-header-assigned"
                style={{ ...minWidthStyle(8), ...tableHeaderStyle }}
              >
                Assigned To
              </Text>
              <Text
                key="text-table-header-owner"
                style={{ ...minWidthStyle(8), ...tableHeaderStyle }}
              >
                PM Owner
              </Text>
              <Text
                key="text-table-header-priority"
                style={{ ...minWidthStyle(4), ...tableHeaderStyle }}
              >
                Priority
              </Text>
              <Text
                key="text-table-header-state"
                style={{ ...minWidthStyle(6), ...tableHeaderStyle }}
              >
                State
              </Text>
            </div>
            {tableData.map((item: TableModel, index) => {
              return (
                <>
                  {index !== 0 && <div key={`table-divider-${item.id}`} style={divider} />}
                  <div key={`div-table-column-${item.id}`} style={tableColumnStyle}>
                    <div key={`div-table-title-${item.id}`} style={titleStyle}>
                      <ChevronRight20Regular key={`icon-chevron-${item.id}`} />
                      {index !== 3 ? (
                        <Rocket20Regular key={`icon-rocket-${item.id}`} />
                      ) : (
                        <Trophy20Regular key={`icon-trophy-${item.id}`} />
                      )}
                      <Text key={`text-title-${item.id}`} wrap={false}>
                        {item.title}
                      </Text>
                    </div>

                    <div key={`div-table-avatar-${item.id}`} style={avatarStyle}>
                      <Avatar
                        key={`avatar-assigned-${item.id}`}
                        name={item.assignedName}
                        image={{ src: `${item.assignedAvatar}` }}
                        size={16}
                      />
                      <Text key={`text-assigned-${item.id}`}>{item.assignedName}</Text>
                    </div>
                    <div key={`div-table-avatar2-${item.id}`} style={avatarStyle}>
                      <Avatar
                        key={`avatar-owner-${item.id}`}
                        name={item.ownerName}
                        image={{ src: `${item.ownerAvatar}` }}
                        size={16}
                      />
                      <Text key={`text-owner-${item.id}`}>{item.ownerName}</Text>
                    </div>
                    <Text key={`text-priority-${item.id}`} style={{ minWidth: "4rem" }}>
                      {item.priority}
                    </Text>
                    <div key={`div-state-${item.id}`} style={stateLayout}>
                      <ProgressBar
                        key={`pb-state-${item.id}`}
                        bgcolor={item.color}
                        completed={item.state}
                      />
                      <Text key={`text-state-${item.id}`} style={stateStyle}>
                        {`${item.state}%`}
                      </Text>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  footerContent(): JSX.Element | undefined {
    return (
      <Button
        key="bt-chart-footer"
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

  customiseWidgetStyle(): CSSProperties | undefined {
    return widgetPaddingStyle;
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
