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

interface ITaskState {
  tasks?: TaskModel[];
  inputFocused?: boolean;
  taskInput?: string;
  addBtnOver?: boolean;
}

export class Task extends Widget<ITaskState> {
  inputDivRef;
  btnRef;

  constructor(props: any) {
    super(props);
    this.inputDivRef = React.createRef<HTMLDivElement>();
    this.btnRef = React.createRef<HTMLButtonElement>();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  async getData(): Promise<ITaskState> {
    return {
      tasks: await getTasks(),
      taskInput: "",
      inputFocused: false,
      addBtnOver: false,
    };
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
            <Add20Filled
              style={{
                color: tokens.colorBrandForeground1,
                marginLeft: "0.35rem",
              }}
            />
            <Text
              truncate
              style={{
                color: tokens.colorBrandForeground1,
                marginLeft: "0.35rem",
              }}
            >
              Add a task
            </Text>
          </div>
          {this.state.data?.tasks?.map((item: TaskModel, index) => {
            return (
              <div style={itemContainer()}>
                <Button icon={<Circle24Regular />} appearance="transparent" />
                <Text truncate>{item.name}</Text>
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

  async componentDidMount() {
    super.componentDidMount();
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event: any) {
    if (this.inputDivRef && !this.inputDivRef.current?.contains(event.target)) {
      this.setState({
        data: {
          ...this.state.data,
          inputFocused: false,
        },
      });
    }
  }

  onAddButtonClick = async (taskTitle?: string) => {
    if (this.state.data?.taskInput && this.state.data.taskInput.length > 0) {
      this.setState({ data: { ...this.state.data, taskInput: "" } });
    }
  };
}
