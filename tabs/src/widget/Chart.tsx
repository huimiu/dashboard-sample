import "@fluent-blocks/basic-icons";
import "./Styles.css";

import { demoData } from "../data/ChartData";
import { CardPropsOrElement } from "@fluent-blocks/react/types/blocks/Card/Card";

export default function ChartWidget(): CardPropsOrElement {
  return {
    card: {
      title: [{ text: "Power BI" }],
      actions: [
        {
          actionId: "edit",
          label: "Edit",
          icon: "edit",
        },
      ],
      body: [
        {
          media: {
            label: "Lines Shaded Chart",
            chart: {
              type: "line-area",
              data: demoData,
            },
          },
        },
      ],
    },
    contextualVariant: "block",
  };
}
