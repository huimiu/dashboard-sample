import "./Styles.css";
import { Avatar, Image, Label, Text, Button } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import Chart from "./Chart";

const chart1Points = [
  {
    x: new Date("2018/01/06"),
    y: 5,
  },
  {
    x: new Date("2018/01/08"),
    y: 16,
  },
  {
    x: new Date("2018/01/16"),
    y: 6,
  },
  {
    x: new Date("2018/02/06"),
    y: 30,
  },
  {
    x: new Date("2018/02/16"),
    y: 10,
  },
];

const chart2Points = [
  {
    x: new Date("2018/01/06"),
    y: 10,
  },
  {
    x: new Date("2018/01/08"),
    y: 33,
  },
  {
    x: new Date("2018/01/16"),
    y: 21,
  },
  {
    x: new Date("2018/02/06"),
    y: 44,
  },
  {
    x: new Date("2018/02/16"),
    y: 22,
  },
];

export default function TableWidget() {
  return (
    <Card className="card">
      <CardHeader
        header={
          <Text weight="semibold" size={300}>
            Features backlog
          </Text>
        }
      />
      <div className="chart-content"></div>
    </Card>
  );
}
