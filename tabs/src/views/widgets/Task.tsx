import React from "react";

import { Button, Image, Text, tokens } from "@fluentui/react-components";
import {
  Add20Filled,
  ArrowRight16Filled,
  Circle24Regular,
  MoreHorizontal32Regular,
  Star24Regular,
} from "@fluentui/react-icons";

import { TaskModel } from "../../models/taskModel";
import { getTasks } from "../../services/taskService";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import { itemContainer } from "../styles/Task.styles";

export class Task extends Widget<TaskModel[]> {
  async getData() {
    // return await getTasks();
    return new Promise<TaskModel[]>(() => {});
  }

  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle()}>
        <Image src="task-icon.png" />
        <Text style={headerTextStyle()}>Your tasks</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  protected bodyContent(): JSX.Element | undefined {
    return (
      <>
        <div style={{ display: "grid", gap: "0.25rem" }}>
          <div style={itemContainer()}>
            <Add20Filled style={{ color: "var(--Foreground Focus)" }} />
            <Text>Add a task</Text>
          </div>
          {this.state.data?.map((item: TaskModel, index) => {
            return (
              <div style={itemContainer()}>
                <Button icon={<Circle24Regular />} appearance="transparent" />
                <Text>{item.content}</Text>
                <Button icon={<Star24Regular />} appearance="transparent" />
              </div>
            );
          })}
        </div>
      </>
    );
  }

  footerContent(): JSX.Element | undefined {
    return (
      <Button
        appearance="transparent"
        icon={<ArrowRight16Filled />}
        iconPosition="after"
        size="small"
        style={{ width: "fit-content", color: tokens.colorBrandForeground1 }}
        onClick={() => {}} // navigate to detailed page
      >
        View all
      </Button>
    );
  }
}
