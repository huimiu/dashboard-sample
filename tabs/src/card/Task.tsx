import "../style/task.css";
import "../style/cardLayout.css";

import React from "react";

import {
  Button,
  Checkbox,
  Input,
  Text,
  ToggleButton,
} from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import {
  Add20Filled,
  Star24Regular,
  ArrowRight16Filled,
} from "@fluentui/react-icons";

import TaskModel from "../model/TaskModel";
import { getTask } from "../service/request";

interface IWidgetProps {}

interface ITaskState {
  tasks: TaskModel[];
  showAddIcon: boolean;
}

export default class TaskWidget extends React.Component<
  IWidgetProps,
  ITaskState
> {
  render(): JSX.Element {
    return this.renderPage();
  }

  constructor(props: any) {
    super(props);
    this.state = {
      tasks: [],
      showAddIcon: false,
    };
  }

  private initTask() {
    this.setState({ tasks: getTask() });
  }

  async componentDidMount() {
    this.initTask();
  }

  renderPage = () => {
    return (
      <Card className="card">
        <CardHeader
          header={
            <Text weight="semibold" size={400}>
              Your Tasks
            </Text>
          }
        />
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
          <div className="bottom-action">
            <Button
              appearance="transparent"
              size="small"
              icon={<ArrowRight16Filled />}
              iconPosition="after"
              style={{ color: "#5B5FC7" }}
            >
              View all
            </Button>
          </div>
        </div>
      </Card>
    );
  };
}
