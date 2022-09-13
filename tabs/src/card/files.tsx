import "../style/files.css";
import "../style/cardLayout.css";

import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Text,
  Image,
} from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import {
  ArrowRight16Filled,
  MoreHorizontal16Filled,
  ArrowDownload24Regular,
  Link24Regular,
} from "@fluentui/react-icons";

import React from "react";

import FilesModel from "../model/FilesModel";
import { matchFileIcon, matchFileIconUrl } from "../common/iconUtils";

interface IFilesProps {
  files?: FilesModel[];
}

interface IFilesState {
  files?: FilesModel[];
  backColor?: string;
}

export class Files extends React.Component<IFilesProps, IFilesState> {
  constructor(props: IFilesProps) {
    super(props);
    this.state = {
      files: props.files,
      backColor: "",
    };
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
            {this.state.files?.map((file: FilesModel) => {
              return (
                <div
                  className="files-item"
                  style={{ backgroundColor: this.state.backColor }}
                >
                  <div
                    className="files-item-icon"
                    onClick={() => window.open(file.weburl)}
                  >
                    {matchFileIcon(file.type)}
                  </div>
                  <div
                    className="files-item-desc"
                    onClick={() => window.open(file.weburl)}
                  >
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
                          <Menu>
                            <MenuTrigger>
                              <MenuItem
                                icon={
                                  <Image src={matchFileIconUrl(file.type)} />
                                }
                              >
                                Open in
                              </MenuItem>
                            </MenuTrigger>
                            <MenuPopover>
                              <MenuList>
                                <MenuItem icon={<Image src="teams.svg" />}>
                                  Teams
                                </MenuItem>
                                <MenuItem
                                  onClick={() => window.open(file.webDavurl)}
                                  icon={
                                    <Image src={matchFileIconUrl(file.type)} />
                                  }
                                >
                                  Desktop app
                                </MenuItem>
                                <MenuItem
                                  icon={
                                    <Image src={matchFileIconUrl(file.type)} />
                                  }
                                  onClick={() => window.open(file.weburl)}
                                >
                                  Browser
                                </MenuItem>
                              </MenuList>
                            </MenuPopover>
                          </Menu>

                          <MenuItem
                            icon={<ArrowDownload24Regular />}
                            onClick={() => window.open(file.webDavurl)}
                          >
                            Download
                          </MenuItem>
                          <MenuItem
                            icon={<Link24Regular />}
                            onClick={() =>
                              navigator.clipboard.writeText(file.weburl!)
                            }
                          >
                            Copy link
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
              onClick={() => {
                window.open("https://www.office.com/mycontent");
              }}
            >
              View all
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}
