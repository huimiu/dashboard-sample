import "@fluent-blocks/basic-icons";

import { WidgetPropsOrElement } from "@fluent-blocks/react/types/blocks/Card/exemplars/Widget";

import { demoData30 } from "../../data/ChartData";

export default function ChartWidget(): WidgetPropsOrElement {
  return {
    widget: {
      title: [{ text: "Power BI" }],
      label: "bi widget",
      tabs: [
        {
          tab: {
            label: "chart",
          },
          panel: [
            {
              media: {
                label: "c1",
                chart: {
                  type: "line-area",
                  data: demoData30,
                },
              },
            },
          ],
        },
      ],
      footerAction: {
        actionId: "chart-foot",
        label: "View details",
      },
    },
  };
}
