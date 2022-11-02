import React from "react";

import { ArrowRight16Filled } from "@fluentui/react-icons";
import { Button, MoreIcon, Text } from "@fluentui/react-northstar";

import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle, headerStyleWithoutIcon} from "../lib/Widget.styles";
import { CollaborationModel } from "../../models/collaborationModel";

export class Collaboration extends Widget<CollaborationModel> {
  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerStyleWithoutIcon()}>
        <Text style={headerTextStyle()} content="Team collaborations" />
        <Button icon={<MoreIcon size="large" />} iconOnly text title="more" />
      </div>
    );
  }

  footerContent(): JSX.Element | undefined {
    return (
      <Button
        primary
        text
        icon={<ArrowRight16Filled />}
        iconPosition="after"
        content="View all"
        size="small"
        style={{ width: "fit-content" }}
        onClick={() => {}}
      />
    );
  }
}
