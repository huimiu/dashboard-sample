import "@fluent-blocks/basic-icons";

import { WidgetPropsOrElement } from "@fluent-blocks/react/types/blocks/Card/exemplars/Widget";

import { demoData } from "../data/ChartData";

export default function PieWidget(): WidgetPropsOrElement {
  return {
    widget: {
      title: [{ text: "Doughnut" }],
      label: "doughnut widget",
      tabs: [
        {
          tab: {
            label: "doughnut",
          },
          panel: [
            {
              media: {
                label: "doughnut",
                chart: {
                  type: "doughnut",
                  data: demoData,
                },
              },
              variant: "viewportWidth",
            },
          ],
        },
      ],
      footerAction: {
        actionId: "doughnut-foot",
        label: "View details",
      },
    },
  };
}
