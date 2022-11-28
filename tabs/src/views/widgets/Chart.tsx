import { AreaChart, IChartProps } from "@fluentui/react-charting";
import {
  ArrowRight16Filled,
  DataPieRegular,
  MoreHorizontal32Regular,
} from "@fluentui/react-icons";
import { Button, Text, tokens } from "@fluentui/react-components";

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
  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle()}>
        <DataPieRegular style={{ height: "1.5rem", width: "1.5rem" }} />
        <Text style={headerTextStyle()}>Area chart</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  bodyContent(): JSX.Element | undefined {
    return <></>;
  }

  footerContent(): JSX.Element | undefined {
    return (
      <Button
        appearance="transparent"
        icon={<ArrowRight16Filled />}
        iconPosition="after"
        size="small"
        style={{ width: "fit-content", color: tokens.colorBrandForeground1 }}
        onClick={() => {}} // navigate to detailed page
      >
        View query
      </Button>
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
