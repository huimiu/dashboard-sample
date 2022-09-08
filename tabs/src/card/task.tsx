import "../style/task.css";
import "../style/cardLayout.css";

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
  ArrowRight16Filled,
  Star24Regular,
} from "@fluentui/react-icons";

import TaskModel from "../model/TaskModel";
import { openTodoApp } from "../service/OpenTodoApp";

export const Task = (tasks?: TaskModel[]) => (
  <Card className="card-stretch">
    <CardHeader
      header={
        <Text
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
        {tasks?.map((t: TaskModel, i) => {
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
          onClick={() => openTodoApp()}
        >
          View all
        </Button>
      </div>
    </div>
  </Card>
);
