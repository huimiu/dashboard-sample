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
import { useStyles } from "./Styles";

export default function Task() {

  const tasks = getTask();
  const styles = useStyles();
  return (
    <Card className={styles.cardContainer} appearance="filled-alternative">
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
        className={styles.footerContainer}
        action={<Button size="small">View More</Button>}
      >
        <Button
          size="small"
          appearance="transparent"
          icon={<ArrowRight16Regular />}
          iconPosition="after"
        >
          Lorem ipsum
        </Button>
      </CardFooter>
    </Card>
  );
}
