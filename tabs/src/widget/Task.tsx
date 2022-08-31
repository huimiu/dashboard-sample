import "./Styles.css";
import "./style/Task.css";

import {
  Body1,
  Button,
  Radio,
  Text,
  ToggleButton,
} from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import { Star24Regular } from "@fluentui/react-icons";

import TaskModel from "../model/TaskModel";
import { getTask } from "../service/Requests";

export default function TaskWidget() {
  const tasks = getTask();
  return (
    <Card appearance="filled-alternative" key="files" className="card">
      <CardHeader
        header={
          <Text weight="semibold" size={400}>
            Your Tasks
          </Text>
        }
      />
      <div className="flex-content">
        <div className="content-between">
          <Radio label="task" value="task1" />
          <ToggleButton icon={<Star24Regular />} appearance="transparent" />
        </div>
        <div className="content-between">
          <Radio label="task" value="task1" />
          <ToggleButton icon={<Star24Regular />} appearance="transparent" />
        </div>
        <div className="content-between">
          <Radio label="task" value="task1" />
          <ToggleButton icon={<Star24Regular />} appearance="transparent" />
        </div>
        <div className="content-between">
          <Radio label="task" value="task1" />
          <ToggleButton icon={<Star24Regular />} appearance="transparent" />
        </div>
        <div className="content-between">
          <Radio label="task" value="task1" />
          <ToggleButton icon={<Star24Regular />} appearance="transparent" />
        </div>
      </div>
    </Card>
  );
}
