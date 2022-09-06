import "../card/Styles.css";
import "../style/cardLayout.css";

import React from "react";

import { Escape } from "@fluent-blocks/react";
import { WidgetPropsOrElement } from "@fluent-blocks/react/types/blocks/Card/exemplars/Widget";
import {
  Button,
  Checkbox,
  Input,
  Text,
  ToggleButton,
} from "@fluentui/react-components";
import {
  Add20Filled,
  ArrowRight16Filled,
  Star24Regular,
} from "@fluentui/react-icons";

import TaskModel from "../model/TaskModel";
import { getTask } from "../service/request";

interface ITaskState {
  tasks: TaskModel[];
  showAddIcon: boolean;
}

export default class Task extends React.Component<{}, ITaskState> {
  constructor(props: any) {
    super(props);
  }

  private initTask() {
    this.setState({ tasks: getTask() });
  }

  async componentDidMount() {
    this.initTask();
  }

  render(): WidgetPropsOrElement {
    return {
      widget: {
        title: "Your Tasks",
        label: "task-widget",
        tabs: [
          {
            tab: {
              label: "task-content",
            },
            panel: [
              <Escape contentMeetsAccessibilityAndDesignStandards>
                <div className="card-content">
                  <div className="task-list">
                    <div className="task-add content-between">
                      <div className="task-add-left">
                        <Add20Filled
                          color="#2266E3"
                          className="task-add-left"
                          key="add-icon"
                        />
                        <Input
                          placeholder="Add a task"
                          style={{
                            border: "none",
                            backgroundColor: "#F2F2F2",
                          }}
                        />
                      </div>
                      <Button
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          maxWidth: "20px",
                          justifyContent: "center",
                          alignContent: "center",
                          width: "20px",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        Add
                      </Button>
                    </div>
                    {this.state.tasks?.map((t: TaskModel, i) => {
                      return (
                        <div className="content-between task-item">
                          <Checkbox
                            label={t.name}
                            shape="circular"
                            size="large"
                            key={t.id?.concat("-check")}
                          />
                          <ToggleButton
                            icon={<Star24Regular />}
                            key={t.id?.concat("-star")}
                            appearance="transparent"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Escape>,
            ],
          },
        ],
      },
    };
  }
}
