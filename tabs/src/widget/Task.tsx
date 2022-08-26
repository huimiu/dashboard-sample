import '@fluent-blocks/basic-icons';

import { Escape } from '@fluent-blocks/react';
import { WidgetPropsOrElement } from '@fluent-blocks/react/types/blocks/Card/exemplars/Widget';
import { Body1, Button } from '@fluentui/react-components';
import { CardHeader } from '@fluentui/react-components/unstable';
import { MoreHorizontal20Filled } from '@fluentui/react-icons';

import TaskModel from '../model/TaskModel';
import { getTask } from '../service/Requests';
import { useStyles } from './Styles';

export default function TaskWidget(): WidgetPropsOrElement {
  const tasks = getTask();
  const styles = useStyles();
  return {
    widget: {
      title: "Task",
      label: "task widget",
      tabs: [
        {
          tab: { label: "task" },
          panel: [
            <Escape contentMeetsAccessibilityAndDesignStandards>
              <div className={styles.cardListContainer}>
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
      ],
      footerAction: {
        actionId: "more",
        label: "View More",
        iconPosition: "after",
      },
    },
  };
}
