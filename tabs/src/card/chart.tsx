import "../style/task.css";
import "../style/chart.css";
import "../style/cardLayout.css";

import { Escape, Media, Table, TableProps } from "@fluent-blocks/react";
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
        c1: { cell: "End of year business plan evision" },
        c2: { cell: "End of year business plan evision" },
        c3: { cell: "End of year business plan evision" },
        c4: { cell: "End of year business plan evision" },
      },
      r2: {
        c1: { cell: "End of year business plan evision" },
        c2: { cell: "End of year business plan evision" },
        c3: { cell: "End of year business plan evision" },
        c4: { cell: "End of year business plan evision" },
      },
      r3: {
        c1: { cell: "End of year business plan evision" },
        c2: { cell: "End of year business plan evision" },
        c3: { cell: "End of year business plan evision" },
        c4: { cell: "End of year business plan evision" },
      },
      r4: {
        c1: { cell: "End of year business plan evision" },
        c2: { cell: "End of year business plan evision" },
        c3: { cell: "End of year business plan evision" },
        c4: { cell: "End of year business plan evision" },
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
          <Text weight="semibold" size={400}>
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
