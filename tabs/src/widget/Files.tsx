import "@fluent-blocks/basic-icons";
import "../style/files.css";
import "../style/cardLayout.css";

import { Escape } from "@fluent-blocks/react";
import { WidgetPropsOrElement } from "@fluent-blocks/react/types/blocks/Card/exemplars/Widget";
import { Text, Button } from "@fluentui/react-components";
import { MoreHorizontal16Filled } from "@fluentui/react-icons";
import {
  ExcelColorIcon,
  FilesTextColoredIcon,
  OneNoteColorIcon,
  PowerPointColorIcon,
  VisioColorIcon,
  WordColorIcon,
} from "@fluentui/react-icons-northstar";

import { FilesType } from "../common/FilesType";
import FilesModel from "../model/FilesModel";
import { getFiles } from "../service/Requests";

export default function FilesWidget(): WidgetPropsOrElement {
  const files = getFiles();
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

/**
 * match icon by files type
 *
 * @param fileType the string of files type
 * @returns react icon
 */
function matchFileIcon(fileType: string) {
  let icon;
  switch (fileType) {
    case FilesType.WORD:
      icon = <WordColorIcon />;
      break;
    case FilesType.EXCEL:
      icon = <ExcelColorIcon />;
      break;
    case FilesType.PPT:
      icon = <PowerPointColorIcon />;
      break;
    case FilesType.VISIO:
      icon = <VisioColorIcon />;
      break;
    case FilesType.ONENOTE:
      icon = <OneNoteColorIcon />;
      break;
    default:
      icon = <FilesTextColoredIcon />;
      break;
  }
  return icon;
}
