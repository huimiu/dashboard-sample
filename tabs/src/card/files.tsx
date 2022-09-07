import "../style/files.css";
import "../style/cardLayout.css";

import React from "react";

import {
  Button,
  Menu,
  MenuTrigger,
  Text,
  MenuPopover,
  MenuList,
  MenuItem,
  Tooltip,
  MenuButton,
  Link,
} from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import {
  MoreHorizontal16Filled,
  ArrowRight16Filled,
} from "@fluentui/react-icons";
import {
  ExcelIcon,
  FilesTxtIcon,
  OneNoteIcon,
  PowerPointIcon,
  VisioIcon,
  WordIcon,
} from "@fluentui/react-icons-northstar";

import { FilesType } from "../common/filesType";
import FilesModel from "../model/FilesModel";
import { getFiles } from "../service/GetFiles";

interface IFileState {
  files: FilesModel[];
}

export default class Files extends React.Component<{}, IFileState> {
  constructor(props: any) {
    super(props);
    this.state = {
      files: [],
    };
  }

  private async initFiles() {
    let fs: FilesModel[] = await getFiles();
    this.setState({ files: fs });
  }

  async componentDidMount() {
    this.initFiles();
  }

  render() {
    return (
      <Card key="files" className="card">
        <CardHeader
          header={
            <Text
              weight="semibold"
              size={400}
              wrap={false}
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              Your Documents
            </Text>
          }
        />
        <div className="card-content">
          <div className="files-content">
            {this.state.files.map((file: FilesModel, i) => {
              return (
                <div className="files-item">
                  <div className="files-item-icon">
                    {matchFileIcon(file.type)}
                  </div>
                  <div className="files-item-desc">
                    <Text weight="semibold" wrap={false} truncate={true}>
                      {file.name}
                    </Text>
                  </div>
                  <div>
                    <Menu>
                      <MenuTrigger>
                        <MenuButton
                          appearance="transparent"
                          icon={<MoreHorizontal16Filled />}
                        />
                      </MenuTrigger>
                      <MenuPopover>
                        <MenuList>
                          <MenuItem onClick={() => window.open(file.weburl)}>
                            Open
                          </MenuItem>
                        </MenuList>
                      </MenuPopover>
                    </Menu>
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
      icon = <WordIcon />;
      break;
    case FilesType.EXCEL:
      icon = <ExcelIcon />;
      break;
    case FilesType.PPT:
      icon = <PowerPointIcon />;
      break;
    case FilesType.VISIO:
      icon = <VisioIcon />;
      break;
    case FilesType.ONENOTE:
      icon = <OneNoteIcon />;
      break;
    default:
      icon = <FilesTxtIcon />;
      break;
  }
  return icon;
}
