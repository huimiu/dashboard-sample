import React from "react";

import {
  Add20Filled,
  ArrowRight16Filled,
  Circle24Regular,
  Star24Regular,
} from "@fluentui/react-icons";
import { Button, Image, MoreIcon, Text } from "@fluentui/react-northstar";

import { TaskModel } from "../../models/taskModel";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";

export class Task extends Widget<TaskModel> {

  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle()}>
        <Image src="task-icon.png" />
        <Text style={headerTextStyle()} content="Your chart" />
        <Button icon={<MoreIcon size="large" />} iconOnly text title="more" />
      </div>
    );
  }


  footerContent(): JSX.Element | undefined {
    return (
      <Button
        primary
        text
        icon={<ArrowRight16Filled />}
        iconPosition="after"
        content="View all"
        size="small"
        style={{ width: "fit-content" }}
        onClick={() => {}}
      />
    );
  }
}
