import { Escape, View } from '@fluent-blocks/react';
import {
    Avatar, Body1, Button, Caption1, Image, mergeClasses, Text
} from '@fluentui/react-components';
import { Card, CardHeader, CardPreview } from '@fluentui/react-components/unstable';
import {
    AccessTimeFilled, MoreHorizontal16Filled, MoreHorizontal48Regular
} from '@fluentui/react-icons';

import { useStyles } from './Styles';

export default function Dashboard() {
  const styles = useStyles();
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
                  item: {
                    widget: {
                      title: "Task",
                      label: "task widget",
                      tabs: [
                        {
                          tab: { label: "task" },
                          panel: [],
                        },
                      ],
                    },
                  },
                },
                {
                  item: {
                    widget: {
                      title: "Task",
                      label: "task widget",
                      tabs: [
                        {
                          tab: { label: "task" },
                          panel: [],
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        ],
      }}
    />
  );
}
