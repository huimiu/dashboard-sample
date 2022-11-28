import { Button, Image, Text, tokens } from "@fluentui/react-components";
import {
  ArrowRight16Filled,
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
import { itemContainer, titleStyle } from "../styles/Document.styles";

export class Documents extends Widget<DocumentModel[]> {
  async getData(): Promise<DocumentModel[]> {
    return await getDocuments();
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
        {this.state.data?.map((item: DocumentModel, index) => {
          return (
            <>
              {index !== 0 && (
                <div
                  style={{
                    marginBottom: "0.5rem",
                    marginLeft: "-2.25rem",
                    marginRight: "-2.3rem",
                    height: "1px",
                    background: tokens.colorNeutralStroke2,
                  }}
                />
              )}
              <div style={itemContainer()}>
                <Image src={getIconByFileType(item.type)} />
                <Text style={titleStyle()}>{item.name}</Text>
                <Button
                  icon={<MoreHorizontal24Regular />}
                  appearance="transparent"
                />
              </div>
            </>
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
