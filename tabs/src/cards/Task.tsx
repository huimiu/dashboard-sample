import { Body1, Button, mergeClasses, Text } from "@fluentui/react-components";
import {
  Card,
  CardFooter,
  CardHeader,
} from "@fluentui/react-components/unstable";
import {
  ArrowRight16Regular,
  MoreHorizontal20Filled,
} from "@fluentui/react-icons";

import TaskModel from "../model/TaskModel";
import { getTask } from "../service/Requests";

export default function Task() {
  const tasks = getTask();
  return (
    <Card>
      <CardHeader
        header={
          <Text weight="semibold" size={400}>
            Task
          </Text>
        }
      />
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

      <CardFooter
        action={
          <Button size="small" appearance="transparent">
            View More
          </Button>
        }
      />
    </Card>
  );
}
