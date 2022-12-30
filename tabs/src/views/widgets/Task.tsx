import React from "react";

import { Button, Checkbox, Image, Text, tokens } from "@fluentui/react-components";
import {
  Add20Filled,
  ArrowRight16Filled,
  MoreHorizontal32Regular,
  Star24Regular,
} from "@fluentui/react-icons";

import { TaskModel } from "../../models/taskModel";
import { callFunction } from "../../services/callFunction";
import { addTask, getTasks } from "../../services/taskService";
import { Widget } from "../lib/Widget";
import { footerBtnStyle, headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import {
  addBtnStyle,
  addTaskBtnStyle,
  addTaskContainer,
  bodyLayout,
  existingTaskLayout,
  inputStyle,
} from "../styles/Task.styles";

interface ITaskState {
  tasks?: TaskModel[];
  inputFocused?: boolean;
  addBtnOver?: boolean;
}

export class Task extends Widget<ITaskState> {
  inputDivRef;
  btnRef;
  inputRef;

  constructor(props: any) {
    super(props);
    this.inputRef = React.createRef<HTMLInputElement>();
    this.inputDivRef = React.createRef<HTMLDivElement>();
    this.btnRef = React.createRef<HTMLButtonElement>();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  async getData(): Promise<ITaskState> {
    return {
      tasks: await getTasks(),
      inputFocused: false,
      addBtnOver: false,
    };
  }

  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle}>
        <Image src="task.svg" />
        
        <Text style={headerTextStyle}>Your tasks</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  protected bodyContent(): JSX.Element | undefined {
    return (
      <>
        <div style={bodyLayout}>
          <div ref={this.inputDivRef} style={addTaskContainer(this.state.data?.inputFocused)}>
            <Add20Filled style={addBtnStyle} />
            <input
              ref={this.inputRef}
              key="task-input"
              type="text"
              id="task-input"
              style={inputStyle(this.state.data?.inputFocused)}
              onFocus={() => {
                this.setState({
                  data: {
                    tasks: this.state.data?.tasks,
                    inputFocused: true,
                    addBtnOver: this.state.data?.addBtnOver,
                  },
                });
              }}
              placeholder="Add a task"
            />
            {this.state.data?.inputFocused && (
              <button
                style={addTaskBtnStyle(this.state.data?.addBtnOver)}
                key="add-task-btn"
                id="add-task-btn"
                onClick={() => {
                  this.onAddButtonClick();
                }}
                onMouseEnter={() =>
                  this.setState({
                    data: {
                      tasks: this.state.data?.tasks,
                      inputFocused: this.state.data?.inputFocused,
                      addBtnOver: true,
                    },
                  })
                }
                onMouseLeave={() =>
                  this.setState({
                    data: {
                      tasks: this.state.data?.tasks,
                      inputFocused: this.state.data?.inputFocused,
                      addBtnOver: false,
                    },
                  })
                }
              >
                Add
              </button>
            )}
          </div>
          {this.state.data?.tasks?.map((item: TaskModel, index) => {
            return (
              <div key={`task-container-${item.id}`} style={existingTaskLayout}>
                <Checkbox key={`task-circle-${item.id}`} shape="circular" label={item.name} />
                <Button
                  key={`task-star-${item.id}`}
                  icon={<Star24Regular />}
                  appearance="transparent"
                />
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
        style={footerBtnStyle}
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
    if (!this.inputDivRef.current?.contains(event.target)) {
      this.setState({
        data: {
          tasks: this.state.data?.tasks,
          inputFocused: false,
          addBtnOver: this.state.data?.addBtnOver,
        },
      });
    }
  }

  onAddButtonClick = async () => {
    if (this.inputRef.current && this.inputRef.current.value.length > 0) {
      const tasks: TaskModel[] = await addTask(this.inputRef.current.value);
      this.setState({
        data: {
          tasks: tasks,
          inputFocused: false,
          addBtnOver: false,
        },
      });
      this.inputRef.current.value = "";
      callFunction(this.inputRef.current.value);
    }
  };
}
