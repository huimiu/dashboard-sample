import React from "react";

import {
  Add20Filled,
  ArrowRight16Filled,
  Circle24Regular,
  Star24Regular,
} from "@fluentui/react-icons";
import {
  Button,
  Image,
  MoreIcon,
  Text,
  CircleIcon,
  StarIcon,
} from "@fluentui/react-northstar";

import { TaskModel } from "../../models/taskModel";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import { itemContainer } from "../styles/Task.styles";

export class Task extends Widget<TaskModel> {
  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle()}>
        <Image src="task-icon.png" />
        <Text style={headerTextStyle()} content="Your tasks" />
        <Button icon={<MoreIcon size="large" />} iconOnly text title="more" />
      </div>
    );
  }

  protected bodyContent(): JSX.Element | undefined {
    return (
      <>
        <div style={{ display: "grid", gap: "0.25rem" }}>
          <div style={itemContainer()}>
            <CircleIcon outline/>
            <Text content="Create a new task" />
            <Button iconOnly text icon={<StarIcon />}   />
          </div>
        </div>
      </>
    );
  }

  footerContent(): JSX.Element | undefined {
    return (
      <Button
        primary
        text
        icon={<ArrowRight16Filled />}
        iconOnly
        iconPosition="after"
        content="View all"
        size="small"
        style={{ width: "fit-content" }}
        onClick={() => {}}
      />
    );
  }
}
