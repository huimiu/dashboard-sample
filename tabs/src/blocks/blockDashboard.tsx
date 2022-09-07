import { Escape, View } from "@fluent-blocks/react";

import Banner from "../card/banner";
import ChartWidget from "./widget/chartWidget";
import Collaboration from "./widget/collaborationWidget";
import Events from "./widget/eventsWidget";
import FilesWidget from "./widget/filesWidget";
import PieWidget from "./widget/pieWidget";
import Task from "./widget/taskWidget";
import TaskWidget from "./widget/taskWidget";

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
              ],
            },
          },
        ],
      }}
    />
  );
}
