import { Escape, View } from "@fluent-blocks/react";

import Banner from "../../card/banner";
import ChartWidget from "../../widget/Chart";
import Collaboration from "../../widget/Collaboration";
import Events from "../../widget/Events";
import FilesWidget from "../../widget/Files";
import PieWidget from "../../widget/Pie";
import TaskWidget from "../../widget/Task";

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
                  inlineSizeFactor: 2,
                  blockSizeFactor: 2,
                },
                {
                  item: Events(),
                  blockSizeFactor: 1,
                },
                {
                  item: TaskWidget(),
                },
                {
                  item: FilesWidget(),
                },
                {
                  item: Collaboration(),
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
