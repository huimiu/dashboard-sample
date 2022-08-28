import "@fluent-blocks/basic-icons";
import "./Styles.css";

import { Escape } from "@fluent-blocks/react";
import { WidgetPropsOrElement } from "@fluent-blocks/react/types/blocks/Card/exemplars/Widget";
import { Body1, Button, ToggleButton } from "@fluentui/react-components";
import { CardHeader } from "@fluentui/react-components/unstable";
import {
  Box16Regular,
  Clock16Regular,
  MoreHorizontal16Filled,
  People16Regular,
  Star16Regular,
} from "@fluentui/react-icons";

import FilesModel from "../model/FilesModel";
import { getFiles } from "../service/Requests";

export default function FilesWidget() {
  const files = getFiles();
  return {
    card: {
      title: [{ text: "Files" }],
      body: [
        <Escape contentMeetsAccessibilityAndDesignStandards>
          <div className="root">
            <div className="tab">
              <ToggleButton
                style={{ minWidth: "50px" }}
                icon={<Box16Regular />}
                size="small"
                shape="circular"
              >
                All
              </ToggleButton>
              <ToggleButton
                style={{ minWidth: "75px" }}
                icon={<Clock16Regular />}
                size="small"
                shape="circular"
              >
                Recently
              </ToggleButton>
              <ToggleButton
                style={{ minWidth: "75px" }}
                icon={<People16Regular />}
                size="small"
                shape="circular"
              >
                Shared
              </ToggleButton>
              <ToggleButton
                style={{ minWidth: "75px" }}
                icon={<Star16Regular />}
                size="small"
                shape="circular"
              >
                Favorites
              </ToggleButton>
            </div>

            {files?.map((file: FilesModel, i) => {
              return (
                <CardHeader
                  key={file.id}
                  image={{
                    as: "img",
                    src: "20x20.jpg",
                    alt: "",
                    height: 30,
                    width: 30,
                  }}
                  header={<Body1>{file.name}</Body1>}
                  action={
                    <Button
                      appearance="transparent"
                      icon={<MoreHorizontal16Filled />}
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
