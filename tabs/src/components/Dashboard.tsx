import { Escape, View } from '@fluent-blocks/react';

import Banner from '../widget/Banner';
import Collaboration from '../widget/Collaboration';
import EventsWidget from '../widget/Events';
import FilesWidget from '../widget/Files';
import TaskWidget from '../widget/Task';

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
              variant: "grid",
              items: [
                {
                  item: TaskWidget(),
                },
                {
                  item: Collaboration(),
                  blockSizeFactor: 1,                  
                  inlineSizeFactor: 2,
                },
                {
                  item: EventsWidget(),
                  blockSizeFactor: 2
                },
                {
                  item: FilesWidget(),
                  inlineSizeFactor: 1,
                }              
              ],
            },
          },
        ],
      }}
      onAction={function noRefCheck() {}}
    />
  );
}
