import "../style/task.css";
import "../style/chart.css";
import "../style/cardLayout.css";

import { Media, Table, TableProps } from "@fluent-blocks/react";
import { Button, Text } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import { ArrowRight16Filled } from "@fluentui/react-icons";

import { demoData } from "../data/ChartData";
import { ChartProps } from "@fluent-blocks/schemas";

const chartProps: ChartProps = {
  label: "line area",
  chart: {
    type: "line-area",
    data: demoData,
  },
};

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

export default function ChartCard() {
  return (
    <Card className="card-stretch">
      <CardHeader
        header={
          <Text
            weight="semibold"
            size={400}
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            Power BI
          </Text>
        }
      />
      <div className="card-content">
        <div>
          <Media {...chartProps} />
        </div>
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
}
