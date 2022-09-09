import "@fluent-blocks/basic-icons";
import "../../style/files.css";
import "../../style/cardLayout.css";

import { Escape } from "@fluent-blocks/react";
import { WidgetPropsOrElement } from "@fluent-blocks/react/types/blocks/Card/exemplars/Widget";
import { Text } from "@fluentui/react-components";
import { MoreHorizontal16Filled } from "@fluentui/react-icons";

import { matchFileIcon } from "../../common/iconUtils";
import FilesModel from "../../model/FilesModel";
import { getFiles } from "../../service/GetFiles";

export default function FilesWidget(): WidgetPropsOrElement {
  let files: FilesModel[] = [];
  getFiles().then((r) => (files = r!));
  return {
    widget: {
      title: "Files",
      label: "files-widget",
      footerAction: {
        actionId: "files-footer",
        label: "View all",
        onAction: () => alert("cliecked"),
      },
      tabs: [
        {
          tab: {
            label: "files-content",
          },
          panel: [
            <Escape contentMeetsAccessibilityAndDesignStandards>
              <div className="flex-content card-widget">
                <div className="card-content">
                  <div className="files-content">
                    {files?.map((file: FilesModel, i) => {
                      return (
                        <div className="files-item">
                          <div className="files-item-icon">
                            {matchFileIcon(file.type)}
                          </div>
                          <div className="files-item-desc">
                            <Text weight="semibold" key={file.id}>
                              {file.name}
                            </Text>
                            <Text key={file.id}>{file.description}</Text>
                          </div>
                          <div className="files-item-more">
                            <MoreHorizontal16Filled />
                          </div>
                        </div>
                      );
                    })}
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
