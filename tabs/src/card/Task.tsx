import "./Styles.css";
import "../style/Task.css";
import "../style/CardLayout.css";

import { Checkbox, Text, ToggleButton } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import { Star24Regular } from "@fluentui/react-icons";

import TaskModel from "../model/TaskModel";
import { getTask } from "../service/Requests";

export default function TaskWidget() {
  const tasks = getTask();
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
          <div></div>
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
      </div>
    </Card>
  );
}
