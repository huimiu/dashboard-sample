import "@fluent-blocks/basic-icons";

import { Escape } from "@fluent-blocks/react";
import { Body1, Button } from "@fluentui/react-components";
import { CardHeader } from "@fluentui/react-components/unstable";
import { MoreHorizontal20Filled } from "@fluentui/react-icons";

import TaskModel from "../model/TaskModel";
import { getTask } from "../service/Requests";
import "./Styles.css";

export default function TaskWidget() {
  const tasks = getTask();
  return {
    card: {
      title: "Task",
      body: [
        <Escape contentMeetsAccessibilityAndDesignStandards>
          <div>
            {tasks.map((task: TaskModel, i) => {
              return (
                <CardHeader
                  key={task.id}
                  image={{
                    as: "img",
                    src: "20x20.jpg",
                    alt: "",
                    height: 30,
                    width: 30,
                  }}
                  header={<Body1>{task.name}</Body1>}
                  action={
                    <Button
                      appearance="transparent"
                      icon={<MoreHorizontal20Filled />}
                    />
                  }
                />
              );
            })}
          </div>
        </Escape>,
      ],
    },
  };
}
