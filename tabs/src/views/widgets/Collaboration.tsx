import { CSSProperties } from "react";

import { Button, Image, Text } from "@fluentui/react-components";
import {
  ArrowRight16Filled,
  CircleSmall20Filled,
  MoreHorizontal32Regular,
  Share20Regular,
} from "@fluentui/react-icons";

import { CollaborationModel } from "../../models/collaborationModel";
import { getCollaborationData } from "../../services/collaborationService";
import { Widget } from "../lib/Widget";
import { footerBtnStyle, headerStyleWithoutIcon, headerTextStyle } from "../lib/Widget.styles";
import {
  bodyContent,
  bodyLayout,
  colorNeutralForeground3,
  descriptionStyle,
  footerLayout,
  gridDisplay,
  shareBtnStyle,
  titleStyle,
} from "../styles/Collaboration.styles";
import { widgetPaddingStyle } from "../styles/Common.styles";

interface ICollaborationState {
  data: CollaborationModel[];
}

export class Collaboration extends Widget<ICollaborationState> {
  async getData(): Promise<ICollaborationState> {
    return { data: getCollaborationData() };
  }

  protected headerContent(): JSX.Element | undefined {
    return (
      <div style={headerStyleWithoutIcon}>
        <Text style={headerTextStyle}>Team collaborations</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  protected bodyContent(): JSX.Element | undefined {
    return (
      <div style={bodyLayout}>
        <div style={bodyContent}>
          {this.state.data?.map((item: CollaborationModel) => {
            return (
              <div key={`collaboration-container-${item.id}`} style={gridDisplay}>
                <Image
                  key={`collaboration-img-${item.id}`}
                  src={item.img}
                  width="100%"
                  shape="rounded"
                />
                <Text key={`collaboration-title-${item.id}`} style={titleStyle}>
                  {item.title}
                </Text>
                <Text key={`collaboration-description-${item.id}`} style={descriptionStyle}>
                  {item.description}
                </Text>
                <div key={`collaboration-footer-${item.id}`} style={footerLayout}>
                  <Button
                    key={`collaboration-share-${item.id}`}
                    icon={<Share20Regular />}
                    appearance="transparent"
                    style={shareBtnStyle}
                  />
                  <CircleSmall20Filled
                    key={`collaboration-circle-${item.id}`}
                    style={colorNeutralForeground3}
                  />
                  <Text key={`collaboration-time-${item.id}`} style={colorNeutralForeground3}>
                    {item.updateTime}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  protected footerContent(): JSX.Element | undefined {
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

  protected widgetStyle(): CSSProperties | undefined {
    return widgetPaddingStyle;
  }
}
