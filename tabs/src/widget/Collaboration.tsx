import "../card/Styles.css";

import { Escape } from "@fluent-blocks/react";
import { Label, Image } from "@fluentui/react-components";
import { CardHeader } from "@fluentui/react-components/unstable";
import {
  ArrowRight24Regular,
  MoreHorizontal20Filled,
  Add24Regular,
  Star24Regular,
} from "@fluentui/react-icons";

import { WidgetPropsOrElement } from "@fluent-blocks/react/types/blocks/Card/exemplars/Widget";

export default function Collaboration(): WidgetPropsOrElement {
  return {
    widget: {
      title: "Team collaboration",
      label: "task-widget",
      tabs: [
        {
          tab: {
            label: "task-content",
          },
          panel: [
            <Escape contentMeetsAccessibilityAndDesignStandards>
              <div className="flex-content">
                <div className="card-container-row">
                  <div className="collaborationItem">
                    <Image
                      height="110px"
                      width="170px"
                      src="content1.jpg"
                      shape="rounded"
                      onClick={() => alert("ss")}
                    />
                    <div className="collaborationDes">
                      <Label weight="semibold">Code Repository</Label>
                      <Label size="small">Uploaded 1h ago</Label>
                    </div>
                  </div>
                  <div className="collaborationItem">
                    <Image
                      bordered
                      height="110px"
                      width="170px"
                      src="content2.png"
                      shape="rounded"
                    />
                    <div className="collaborationDes">
                      <Label weight="semibold">Azure DevOps</Label>
                      <Label size="small">Uploaded 1h ago</Label>
                    </div>
                  </div>
                  <div className="collaborationItem">
                    <Image
                      height="110px"
                      width="170px"
                      src="content3.jpg"
                      shape="rounded"
                    />
                    <div className="collaborationDes">
                      <Label weight="semibold">Data Analytics</Label>
                      <Label size="small">Uploaded 1h ago</Label>
                    </div>
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
