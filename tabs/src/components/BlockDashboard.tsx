import { Escape, View } from "@fluent-blocks/react";

import Banner from "../widget/Banner";
import ChartWidget from "../blocks/Chart";

export default function BlockDashboard() {
  return (
    <View
      accentScheme="teams"
      themeName="light"
      main={{
        title: "",
        blocks: [
          <Escape contentMeetsAccessibilityAndDesignStandards>
            <Banner />
          </Escape>,
          {
            dashboard: {
              items: [
                {
                  item: ChartWidget(),
                  blockSizeFactor: 1,
                  inlineSizeFactor: 2,
                },
              ],
            },
          },
        ],
      }}
    />
  );
}
