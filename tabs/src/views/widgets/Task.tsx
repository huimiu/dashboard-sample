import React from "react";

import { Button, Checkbox, Image, Text } from "@fluentui/react-components";
import {
  Add20Filled,
  ArrowRight16Filled,
  Circle20Regular,
  MoreHorizontal32Regular,
  Star24Regular,
} from "@fluentui/react-icons";

import { TeamsFxContext } from "../../internal/context";
import { TaskModel } from "../../models/taskModel";
import { callFunction } from "../../services/callFunction";
import { addTask, getTasks } from "../../services/taskService";
import { EmptyThemeImg } from "../components/EmptyThemeImg";
import { Widget } from "../lib/Widget";
import { footerBtnStyle, headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import { emptyLayout, emptyTextStyle } from "../styles/Common.styles";
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
  loading?: boolean;
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
      loading: false,
    };
  }

  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle}>
        <TeamsFxContext.Consumer>
          {({ themeString }) =>
            themeString === "default" ? <Image src={`task.svg`} /> : <Image src={`task-dark.svg`} />
          }
        </TeamsFxContext.Consumer>
        <Text style={headerTextStyle}>Your tasks</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  protected bodyContent(): JSX.Element | undefined {
    const loading: boolean = !this.state.data || (this.state.data.loading ?? true);
    const hasTask = this.state.data?.tasks?.length !== 0;
    return (
      <>
        <div style={bodyLayout(hasTask)}>
          <TeamsFxContext.Consumer>
            {({ themeString }) => this.inputLayout(themeString)}
          </TeamsFxContext.Consumer>
          {loading ? (
            <></>
          ) : hasTask ? (
            this.state.data?.tasks?.map((item: TaskModel) => {
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
            })
          ) : (
            <div style={emptyLayout}>
              <EmptyThemeImg />
              <Text weight="semibold" style={emptyTextStyle}>
                Once you have a task, you'll find it here
              </Text>
            </div>
          )}
        </div>
      </>
    );
  }

  footerContent(): JSX.Element | undefined {
    if (this.state.data?.tasks?.length !== 0) {
      return (
        <Button
          appearance="transparent"
          icon={<ArrowRight16Filled />}
          iconPosition="after"
          size="small"
          style={footerBtnStyle}
          onClick={() =>
            window.open(
              "https://teams.microsoft.com/l/app/0d5c91ee-5be2-4b79-81ed-23e6c4580427?source=app-details-dialog",
              "_blank"
            )
          } // navigate to detailed page
        >
          View all
        </Button>
      );
    } else {
      return undefined;
    }
  }

  inputLayout(themeString: string): JSX.Element | undefined {
    return (
      <div
        ref={this.inputDivRef}
        style={addTaskContainer(themeString, this.state.data?.inputFocused)}
      >
        {this.state.data?.inputFocused ? (
          <Circle20Regular style={addBtnStyle} />
        ) : (
          <Add20Filled style={addBtnStyle} />
        )}

        <input
          ref={this.inputRef}
          key="task-input"
          type="text"
          id="task-input"
          style={inputStyle(this.state.data?.inputFocused)}
          onFocus={() => this.inputFocusedState()}
          placeholder="Add a task"
        />
        {this.state.data?.inputFocused && (
          <button
            key="add-task-btn"
            id="add-task-btn"
            style={addTaskBtnStyle(this.state.data?.addBtnOver)}
            onClick={() => {
              this.onAddButtonClick();
            }}
            onMouseEnter={() => this.mouseEnterState()}
            onMouseLeave={() => this.mouseLeaveState()}
          >
            Add
          </button>
        )}
      </div>
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
          loading: false,
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
          loading: false,
        },
      });
      this.inputRef.current.value = "";
      callFunction(this.inputRef.current.value);
    }
  };

  inputFocusedState = () => {
    this.setState({
      data: {
        tasks: this.state.data?.tasks,
        inputFocused: true,
        addBtnOver: this.state.data?.addBtnOver,
        loading: false,
      },
    });
  };

  mouseEnterState = () => {
    this.setState({
      data: {
        tasks: this.state.data?.tasks,
        inputFocused: this.state.data?.inputFocused,
        addBtnOver: true,
        loading: false,
      },
    });
  };

  mouseLeaveState = () => {
    this.setState({
      data: {
        tasks: this.state.data?.tasks,
        inputFocused: this.state.data?.inputFocused,
        addBtnOver: false,
        loading: false,
      },
    });
  };
}
