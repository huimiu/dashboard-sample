import {
  Avatar,
  Body1,
  Caption1,
  Image,
  mergeClasses,
} from "@fluentui/react-components";
import { Escape, View } from "@fluent-blocks/react";
import {
  Card,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components/unstable";
import { Comment16Regular } from "@fluentui/react-icons";

import { title } from "process";
import { Layout } from "@fluent-blocks/react/types/blocks/Layout/Layout";
import Banner from "../widget/Banner";
import FilesWidget from "../widget/Files";
import TaskWidget from "../widget/Task";
import Collaboration from "../widget/Collaboration";
import EventsWidget from "../widget/Events"

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
