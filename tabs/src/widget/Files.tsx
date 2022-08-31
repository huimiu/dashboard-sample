import "./style/Files.css";
import "./Styles.css";

import {
  Avatar,
  Body1,
  Button,
  Image,
  Text,
  ToggleButton,
} from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
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

import { FilesType } from "../common/FilesType";
import FilesModel from "../model/FilesModel";
import { getFiles } from "../service/Requests";

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
  return (
    <Card appearance="filled-alternative" key="files" className="card">
      <CardHeader
        header={
          <Text weight="semibold" size={400}>
            Your Documents
          </Text>
        }
      />
      <div className="flex-content">
        <div className="card-content">
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
          <div className="bottom-action">
            <Button appearance="transparent" size="small">
              View all
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
