import { View } from "@fluent-blocks/react";

import { demoData } from "../data/ChartData";

import * as React from "react";

export default function Chart() {
  return (
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
  );
}
