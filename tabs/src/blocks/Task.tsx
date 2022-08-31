import "@fluent-blocks/basic-icons";
import "./Styles.css";

import { Escape } from "@fluent-blocks/react";
import { Body1, Button } from "@fluentui/react-components";
import { CardHeader } from "@fluentui/react-components/unstable";
import {
  ArrowRight24Regular,
  MoreHorizontal20Filled,
  Add24Regular,
} from "@fluentui/react-icons";

import TaskModel from "../model/TaskModel";
import { getTask } from "../service/Requests";

export default function Task() {
  const tasks = getTask();
  return {
    card: {
      title: "Your Tasks",
      body: [
        <Escape contentMeetsAccessibilityAndDesignStandards>
          <div className="cardContainer">
            <div className="smallCardContent">
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
            <div className="actions">
              <Button icon={<Add24Regular />}>Create task</Button>
              <Button
                icon={<ArrowRight24Regular />}
                iconPosition="after"
                appearance="transparent"
                size="small"
              >
                View More
              </Button>
            </div>
          </div>
        </Escape>,
      ],
    },
  };
}
