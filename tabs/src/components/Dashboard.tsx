import '@fluent-blocks/basic-icons';

import { View } from '@fluent-blocks/react';

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
          {
            dashboard: {
              items: [
                {
                  item: TaskWidget(),
                },
                {
                  item: FilesWidget(),
                },
                {
                  item: FilesWidget(),
                },
                {
                  item: FilesWidget(),
                }
              ],
            },
          },
        ],
      }}
    />
  );
}
