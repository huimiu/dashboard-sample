import "../style/files.css";
import "../style/cardLayout.css";

import { Button, Text } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import {
  MoreHorizontal16Filled,
  ArrowRight16Filled,
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
import { getFiles } from "../service/request";

export default function Files() {
  const files = getFiles();
  return (
    <Card key="files" className="card">
      <CardHeader
        header={
          <Text weight="semibold" size={400} wrap={false}>
            Your Documents
          </Text>
        }
      />
      <div className="card-content">
        <div className="files-content">
          {files?.map((file: FilesModel, i) => {
            return (
              <div className="files-item">
                <div className="files-item-icon">
                  {matchFileIcon(file.type)}
                </div>
                <div className="files-item-desc">
                  <Text weight="semibold" wrap={false} truncate={true}>
                    {file.name}
                  </Text>
                  <Text wrap={false} truncate={true}>
                    {file.description}
                  </Text>
                </div>
                <div className="files-item-more">
                  <MoreHorizontal16Filled />
                </div>
              </div>
            );
          })}
        </div>
        <div className="bottom-action">
          <Button
            appearance="transparent"
            size="small"
            icon={<ArrowRight16Filled />}
            iconPosition="after"
            style={{ color: "#5B5FC7" }}
          >
            View all
          </Button>
        </div>
      </div>
    </Card>
  );
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
