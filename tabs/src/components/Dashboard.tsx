import { Escape, View } from "@fluent-blocks/react";

import Banner from "../widget/Banner";
import ChartWidget from "../widget/Chart";
import Collaboration from "../widget/Collaboration";
import EventsWidget from "../widget/Events";
import FilesWidget from "../widget/Files";
import TaskWidget from "../widget/Task";

export default function Dashboard() {
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
            layout: {
              variant: "flex",
              items: [
                {
                  item: TaskWidget(),
                  contextualVariant: "flex",
                },
                {
                  item: Collaboration(),
                  contextualVariant: "flex",
                },
                {
                  item: EventsWidget(),
                  contextualVariant: "flex",
                  blockSizeFactor: 2,
                },
                {
                  item: FilesWidget(),
                  contextualVariant: "flex",
                  inlineSizeFactor: 1,
                },
                {
                  item: ChartWidget(),
                  contextualVariant: "flex",
                  inlineSizeFactor: 2,
                  blockSizeFactor: 1,
                },
              ],
            },
          },
        ],
      }}
    />
  );
}
