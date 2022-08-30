import "@fluent-blocks/basic-icons";
import "./style/Files.css";

import { Escape } from "@fluent-blocks/react";
import {
  Body1,
  Button,
  ToggleButton,
  Image,
  Text,
  Avatar,
} from "@fluentui/react-components";
import { CardHeader } from "@fluentui/react-components/unstable";
import {
  ArrowRight16Regular,
  Box16Regular,
  Clock16Regular,
  MoreHorizontal16Filled,
  People16Regular,
  Star16Regular,
} from "@fluentui/react-icons";
import {
  ExcelColorIcon,
  FilesTextColoredIcon,
  OneNoteColorIcon,
  PowerPointColorIcon,
  VisioColorIcon,
  WordColorIcon,
} from "@fluentui/react-icons-northstar";

import FilesModel from "../model/FilesModel";
import { getFiles } from "../service/Requests";
import { FilesType } from "../common/FilesType";

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

export default function FilesWidget() {
  const files = getFiles();
  return {
    card: {
      title: [{ text: "Files" }],
      body: [
        <Escape contentMeetsAccessibilityAndDesignStandards>
          <div className="card-container">
            <div className="card-content">
              <div className="files-tab">
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
              <div className="files-content">
                {files?.map((file: FilesModel, i) => {
                  return (
                    <div className="files-item">
                      <div className="files-item-icon">
                        {matchFileIcon(file.type)}
                      </div>
                      <div className="files-item-desc">
                        <Text weight="semibold">{file.name}</Text>
                        <Text>{file.description}</Text>
                      </div>
                      <div className="files-item-more">
                        <MoreHorizontal16Filled />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="files-action">
              <Button
                icon={<ArrowRight16Regular />}
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
