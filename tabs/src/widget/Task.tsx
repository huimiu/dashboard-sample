import "../card/Styles.css";
import "../style/CardLayout.css";

import { Escape } from "@fluent-blocks/react";
import { Radio, ToggleButton } from "@fluentui/react-components";
import { Star24Regular } from "@fluentui/react-icons";

import TaskModel from "../model/TaskModel";
import { getTask } from "../service/Requests";
import { WidgetPropsOrElement } from "@fluent-blocks/react/types/blocks/Card/exemplars/Widget";

export default function Task(): WidgetPropsOrElement {
  const tasks = getTask();
  return {
    widget: {
      title: "Your Tasks",
      label: "task-widget",
      tabs: [
        {
          tab: {
            label: "task-content",
          },
          panel: [
            <Escape contentMeetsAccessibilityAndDesignStandards>
              <div className="flex-content card-widget">
                <div className="card-content">
                  <div className="content-between">
                    <Radio label="task" value="task1" />
                    <ToggleButton
                      icon={<Star24Regular />}
                      appearance="transparent"
                    />
                  </div>
                  <div className="content-between">
                    <Radio label="task" value="task1" />
                    <ToggleButton
                      icon={<Star24Regular />}
                      appearance="transparent"
                    />
                  </div>
                  <div className="content-between">
                    <Radio label="task" value="task1" />
                    <ToggleButton
                      icon={<Star24Regular />}
                      appearance="transparent"
                    />
                  </div>
                  <div className="content-between">
                    <Radio label="task" value="task1" />
                    <ToggleButton
                      icon={<Star24Regular />}
                      appearance="transparent"
                    />
                  </div>
                  <div className="content-between">
                    <Radio label="task" value="task1" />
                    <ToggleButton
                      icon={<Star24Regular />}
                      appearance="transparent"
                    />
                  </div>
                </div>
              </div>
            </Escape>,
          ],
        },
      ],
    },
  };
}
