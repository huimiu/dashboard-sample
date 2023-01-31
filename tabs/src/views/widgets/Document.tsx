import { CSSProperties } from "react";

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
  Spinner,
  Text,
} from "@fluentui/react-components";
import {
  ArrowDownload24Regular,
  ArrowRight16Filled,
  Link24Regular,
  MoreHorizontal16Filled,
  MoreHorizontal32Regular,
} from "@fluentui/react-icons";

import { TEAMS_SVG } from "../../common/constants";
import { DocumentModel } from "../../models/documentModel";
import { getDocuments, getIconByFileType } from "../../services/documentService";
import { EmptyThemeImg } from "../components/EmptyThemeImg";
import { Widget } from "../lib/Widget";
import { footerBtnStyle, headerStyleWithoutIcon, headerTextStyle } from "../lib/Widget.styles";
import { emptyLayout, emptyTextStyle } from "../styles/Common.styles";
import {
  bodyLayout,
  divider,
  docInfoLayout,
  headerStyle,
  itemContent,
  taskContainer,
  widgetStyle,
} from "../styles/Document.styles";

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
      <div style={{ ...headerStyleWithoutIcon, ...headerStyle }}>
        <Text style={headerTextStyle}>Your documents</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  bodyContent(): JSX.Element | undefined {
    const hasDocument = this.state.documents?.length !== 0;
    return (
      <div style={bodyLayout(hasDocument)}>
        {hasDocument ? (
          this.state.documents?.map((item: DocumentModel, i) => {
            return (
              <div
                key={`div-container-${item.id}`}
                style={taskContainer}
                onMouseOver={() => this.mouseOver(i)}
                onMouseLeave={() => this.mouseLeave()}
              >
                {i !== 0 && <div key={`divider-${item.id}`} style={divider} />}
                <div
                  key={`div-content-${item.id}`}
                  style={itemContent(i === this.state.activeIndex)}
                >
                  <div
                    key={`div-doc-info-${item.id}`}
                    style={docInfoLayout}
                    onClick={() => window.open(item.teamsurl)}
                  >
                    <Image
                      key={`img-${item.id}`}
                      src={getIconByFileType(item.type)}
                      width="28px"
                      height="28px"
                    />
                    <Label key={`label-${item.id}`} weight="semibold">
                      {item.name}
                    </Label>
                  </div>
                  <Menu key={`menu-more-${item.id}`}>
                    <MenuTrigger key={`menu-more-trigger-${item.id}`}>
                      <MenuButton
                        key={`menu-more-button-${item.id}`}
                        appearance="transparent"
                        icon={<MoreHorizontal16Filled />}
                      />
                    </MenuTrigger>
                    <MenuPopover key={`menu-pop-${item.id}`}>
                      <MenuList key={`menu-list-${item.id}`}>
                        <Menu key={`menu-${item.id}`}>
                          <MenuTrigger key={`menu-trigger-${item.id}`}>
                            <MenuItem
                              key={`menu-item-${item.id}`}
                              icon={<Image src={getIconByFileType(item.type)} />}
                            >
                              Open in
                            </MenuItem>
                          </MenuTrigger>
                          <MenuPopover key={`menu-open-pop-${item.id}`}>
                            <MenuList key={`menu-open-list-${item.id}`}>
                              <MenuItem
                                key={`menu-teams-${item.id}`}
                                icon={<Image src={TEAMS_SVG} width="20px" />}
                                onClick={() => window.open(item.teamsurl)}
                              >
                                Teams
                              </MenuItem>
                              <MenuItem
                                key={`menu-desktop-${item.id}`}
                                onClick={() => window.open(item.webDavurl)}
                                icon={<Image src={getIconByFileType(item.type)} />}
                              >
                                Desktop app
                              </MenuItem>
                              <MenuItem
                                key={`menu-browser-${item.id}`}
                                icon={<Image src={getIconByFileType(item.type)} />}
                                onClick={() => window.open(item.weburl)}
                              >
                                Browser
                              </MenuItem>
                            </MenuList>
                          </MenuPopover>
                        </Menu>

                        <MenuItem
                          key={`menu-download-${item.id}`}
                          icon={<ArrowDownload24Regular />}
                          onClick={() => window.open(item.webDavurl)}
                        >
                          Download
                        </MenuItem>
                        <MenuItem
                          key={`menu-copy-${item.id}`}
                          icon={<Link24Regular />}
                          onClick={() => navigator.clipboard.writeText(item.weburl!)}
                        >
                          Copy link
                        </MenuItem>
                      </MenuList>
                    </MenuPopover>
                  </Menu>
                </div>
              </div>
            );
          })
        ) : (
          <div style={emptyLayout}>
            <EmptyThemeImg />
            <Text weight="semibold" style={emptyTextStyle}>
              Once you have a document, you'll find it here
            </Text>
          </div>
        )}
      </div>
    );
  }

  footerContent(): JSX.Element | undefined {
    if (this.state.documents?.length !== 0) {
      return (
        <Button
          appearance="transparent"
          icon={<ArrowRight16Filled />}
          iconPosition="after"
          size="small"
          style={{ ...footerBtnStyle, padding: "0px 1.25rem 1.25rem 1.25rem" }}
          onClick={() => window.open("https://www.office.com/mycontent")}
        >
          View all
        </Button>
      );
    } else {
      return undefined;
    }
  }

  protected loadingContent(): JSX.Element | undefined {
    return (
      <div style={{ display: "grid", justifyContent: "center", height: "100%" }}>
        <Spinner label="Loading..." labelPosition="below" />
      </div>
    );
  }

  widgetStyle(): CSSProperties | undefined {
    return widgetStyle;
  }

  mouseOver = (i: number) => {
    this.setState({
      activeIndex: i,
      documents: this.state.documents,
      loading: false,
    });
  };

  mouseLeave = () => {
    this.setState({
      activeIndex: -1,
      documents: this.state.documents,
      loading: false,
    });
  };
}
