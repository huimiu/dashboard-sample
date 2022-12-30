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
} from "@fluentui/react-components";
import {
  ArrowDownload24Regular,
  ArrowRight16Filled,
  Link24Regular,
  MoreHorizontal16Filled,
  MoreHorizontal32Regular,
} from "@fluentui/react-icons";

import { DocumentModel } from "../../models/documentModel";
import { getDocuments, getIconByFileType } from "../../services/documentService";
import { Widget } from "../lib/Widget";
import { footerBtnStyle, headerStyleWithoutIcon, headerTextStyle } from "../lib/Widget.styles";
import {
  bodyLayout,
  divider,
  itemContent,
  taskContainer,
  titleStyle,
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
      <div style={headerStyleWithoutIcon}>
        <Text style={headerTextStyle}>Your documents</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  bodyContent(): JSX.Element | undefined {
    return (
      <div style={bodyLayout}>
        {this.state.data?.documents?.map((item: DocumentModel, i) => {
          return (
            <div
              key={`container-${item.id}`}
              style={taskContainer(i == this.state.data?.activeIndex)}
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
              {i !== 0 && <div key={`divider-${item.id}`} style={divider} />}
              <div key={`content-${item.id}`} style={itemContent}>
                <Image
                  key={`img-${item.id}`}
                  src={getIconByFileType(item.type)}
                  width="28px"
                  height="28px"
                />
                <Label key={`label-${item.id}`} weight="semibold">
                  {item.name}
                </Label>
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
                              icon={<Image src="teams.svg" />}
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
        style={footerBtnStyle}
        onClick={() => {}} // navigate to detailed page
      >
        View all
      </Button>
    );
  }
}
