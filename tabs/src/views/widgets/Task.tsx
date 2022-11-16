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
  AddIcon,
  Provider,
  teamsTheme
} from "@fluentui/react-northstar";

import { TaskModel } from "../../models/taskModel";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import { itemContainer } from "../styles/Task.styles";
import { getTasks } from "../../services/getTasks";
import { useTeamsFx } from '@microsoft/teamsfx-react';

export class Task extends Widget<TaskModel[]> {
  async getData() {
    return await getTasks();
  }

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
      <Provider theme={teamsTheme}>      
        <div style={{ display: "grid", gap: "0.25rem" }}>
          <div style={itemContainer()}>
            <AddIcon style={{color: "var(--Foreground Focus)"}}/>
            <Text content="Add a task" />
          </div>
          {this.state.data?.map((item: TaskModel, index) => {
            return (
              <div style={itemContainer()}>
                <CircleIcon outline />
                <Text content={item.name} />
                <Button iconOnly text icon={<StarIcon />} />
              </div>
            );
          })}
        </div>
        </Provider>
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
