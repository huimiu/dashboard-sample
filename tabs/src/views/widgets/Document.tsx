import {
  Button,
  Image,
  Label,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Text,
  tokens,
} from "@fluentui/react-components";
import {
  ArrowDownload24Regular,
  ArrowRight16Filled,
  Link24Regular,
  MoreHorizontal16Filled,
  MoreHorizontal24Regular,
  MoreHorizontal32Regular,
} from "@fluentui/react-icons";

import { DocumentModel } from "../../models/documentModel";
import {
  getDocuments,
  getIconByFileType,
} from "../../services/documentService";
import { Widget } from "../lib/Widget";
import { headerStyleWithoutIcon, headerTextStyle } from "../lib/Widget.styles";
import { itemContent, titleStyle } from "../styles/Document.styles";

interface IDocumentState {
  activeIndex: number;
  documents?: DocumentModel[];
}

export class Documents extends Widget<IDocumentState> {
  async getData(): Promise<IDocumentState> {
    return { documents: await getDocuments(), activeIndex: -1 };
  }

  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerStyleWithoutIcon()}>
        <Text style={headerTextStyle()}>Your documents</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  bodyContent(): JSX.Element | undefined {
    return (
      <div style={{ display: "grid" }}>
        {this.state.data?.documents?.map((item: DocumentModel, i) => {
          return (
            <div
              style={{
                display: "grid",
                height: "3rem",
                marginLeft: "-2.4rem",
                marginRight: "-1.3rem",
                backgroundColor:
                  i == this.state.data?.activeIndex
                    ? tokens.colorNeutralBackground5Hover
                    : tokens.colorNeutralBackground1,
              }}
              onMouseOver={() =>
                this.setState({
                  data: {
                    activeIndex: i,
                    documents: this.state.data?.documents,
                  },
                })
              }
              onMouseLeave={() =>
                this.setState({
                  data: {
                    activeIndex: -1,
                    documents: this.state.data?.documents,
                  },
                })
              }
            >
              {i !== 0 && (
                <div
                  style={{
                    height: "1px",
                    background: tokens.colorNeutralStroke2,
                  }}
                />
              )}
              <div style={itemContent()}>
                <Image
                  src={getIconByFileType(item.type)}
                  width="28px"
                  height="28px"
                />
                <Label weight="semibold">{item.name}</Label>
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
                            icon={<Image src={getIconByFileType(item.type)} />}
                          >
                            Open in
                          </MenuItem>
                        </MenuTrigger>
                        <MenuPopover>
                          <MenuList>
                            <MenuItem
                              icon={<Image src="teams.svg" />}
                              onClick={() => window.open(item.teamsurl)}
                            >
                              Teams
                            </MenuItem>
                            <MenuItem
                              onClick={() => window.open(item.webDavurl)}
                              icon={
                                <Image src={getIconByFileType(item.type)} />
                              }
                            >
                              Desktop app
                            </MenuItem>
                            <MenuItem
                              icon={
                                <Image src={getIconByFileType(item.type)} />
                              }
                              onClick={() => window.open(item.weburl)}
                            >
                              Browser
                            </MenuItem>
                          </MenuList>
                        </MenuPopover>
                      </Menu>

                      <MenuItem
                        icon={<ArrowDownload24Regular />}
                        onClick={() => window.open(item.webDavurl)}
                      >
                        Download
                      </MenuItem>
                      <MenuItem
                        icon={<Link24Regular />}
                        onClick={() =>
                          navigator.clipboard.writeText(item.weburl!)
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
    );
  }

  footerContent(): JSX.Element | undefined {
    return (
      <Button
        appearance="transparent"
        icon={<ArrowRight16Filled />}
        iconPosition="after"
        size="small"
        style={{ width: "fit-content", color: tokens.colorBrandForeground1 }}
        onClick={() => {}} // navigate to detailed page
      >
        View all
      </Button>
    );
  }
}
