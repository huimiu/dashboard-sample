import "../style/task.css";
import "../style/chart.css";
import "../style/cardLayout.css";

import { Escape, View } from "@fluent-blocks/react";
import { Button, Text } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import { ArrowRight16Filled } from "@fluentui/react-icons";

import { demoData } from "../data/ChartData";

export default function Chart() {
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
        <View
          accentScheme="teams"
          themeName="light"
          main={{
            title: "",
            blocks: [
              {
                media: {
                  label: "c1",
                  chart: {
                    type: "line-area",
                    data: demoData,
                  },
                },
              },
            ],
          }}
        />

        <div className="bottom-action">
          <Button
            appearance="transparent"
            size="small"
            icon={<ArrowRight16Filled />}
            iconPosition="after"
            style={{ color: "#5B5FC7" }}
          >
            View calendar
          </Button>
        </div>
      </div>
    </Card>
  );
}
