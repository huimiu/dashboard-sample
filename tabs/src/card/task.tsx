import "../style/task.css";
import "../style/cardLayout.css";

import React from "react";

import {
  Button,
  Checkbox,
  Text,
  ToggleButton,
  tokens,
} from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import {
  Add20Filled,
  ArrowRight16Filled,
  Star24Regular,
} from "@fluentui/react-icons";

import TaskModel from "../model/TaskModel";
import { openTodoApp } from "../service/OpenTodoApp";
import { addTaskWithData } from "../service/request";

interface ITaskProps {
  tasks?: TaskModel[];
}

interface ITaskState {
  tasks?: TaskModel[];
  taskInput?: string;
  inputFocused: boolean;
  addBtnOver: boolean;
}

export class Task extends React.Component<ITaskProps, ITaskState> {
  inputDivRef;
  btnRef;

  constructor(props: ITaskProps) {
    super(props);
    this.inputDivRef = React.createRef<HTMLDivElement>();
    this.btnRef = React.createRef<HTMLButtonElement>();
    this.state = {
      tasks: props.tasks,
      taskInput: "",
      inputFocused: false,
      addBtnOver: false,
    };
  }

  componentDidMount(): void {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event: any) {
    if (this.inputDivRef && !this.inputDivRef.current?.contains(event.target)) {
      this.setState({ inputFocused: false });
    }
  }

  onAddButtonClick = async (taskTitle?: string) => {
    if (this.state.taskInput && this.state.taskInput.length > 0) {
      let tasks = await addTaskWithData(taskTitle!);
      this.setState({ tasks: tasks!, taskInput: "", inputFocused: false });
    }
  };

  render() {
    return (
      <Card className="card-stretch">
        <CardHeader
          header={
            <Text
              key="task-title"
              weight="semibold"
              size={400}
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              Your Tasks
            </Text>
          }
        />
        <div className="card-content">
          <div className="task-list">
            <div
              ref={this.inputDivRef}
              className="task-add content-between"
              style={{
                backgroundColor: this.state.inputFocused
                  ? "#D2D2D2"
                  : "#F2F2F2",
              }}
            >
              <div className="task-add-left">
                <Add20Filled
                  key="add-icon"
                  color="#2266E3"
                  style={{ marginLeft: "5px" }}
                />
                <input
                  key="task-input"
                  type="text"
                  id="task-input"
                  style={{
                    backgroundColor: this.state.inputFocused
                      ? "#D2D2D2"
                      : "#F2F2F2",
                  }}
                  onFocus={() => {
                    this.setState({ inputFocused: true });
                  }}
                  value={this.state.taskInput}
                  onChange={(e) => {
                    this.setState({ taskInput: e.target.value });
                  }}
                  placeholder="Add a task"
                  className="task-input"
                />
              </div>
              {this.state.inputFocused && (
                <button
                  style={{
                    backgroundColor: this.state.addBtnOver
                      ? tokens.colorNeutralBackground1Hover
                      : tokens.colorNeutralBackground1,
                  }}
                  key="add-task-btn"
                  id="add-task-btn"
                  className="task-add-btn"
                  onClick={() => {
                    this.onAddButtonClick(this.state.taskInput);
                  }}
                  onMouseEnter={() => this.setState({ addBtnOver: true })}
                  onMouseLeave={() => this.setState({ addBtnOver: false })}
                >
                  Add
                </button>
              )}
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
              key="task-more-btn"
              appearance="transparent"
              size="small"
              icon={<ArrowRight16Filled />}
              iconPosition="after"
              style={{ color: "#5B5FC7" }}
              onClick={() => openTodoApp()}
            >
              View all
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}
