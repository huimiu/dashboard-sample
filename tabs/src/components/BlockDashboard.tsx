import { Escape, View } from "@fluent-blocks/react";

import Banner from "../card/Banner";
import TaskWidget from "../widget/Task";
import ChartWidget from "../widget/Chart";
import FilesWidget from "../widget/Files";
import Collaboration from "../widget/Collaboration";
import Events from "../widget/Events";
import PieWidget from "../widget/Pie";

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
                  item: PieWidget(),
                },
                {
                  item: ChartWidget(),
                  inlineSizeFactor: 2,
                  blockSizeFactor: 1,
                },
                {
                  item: Events(),
                  blockSizeFactor: 1,
                },
                {
                  item: FilesWidget(),
                },
                {
                  item: Collaboration(),
                  inlineSizeFactor: 2,
                },
                {
                  item: TaskWidget(),
                },
              ],
            },
          },
        ],
      }}
    />
  );
}
