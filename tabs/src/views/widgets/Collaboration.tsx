import { Button, Text, tokens } from "@fluentui/react-components";
import {
  ArrowRight16Filled,
  MoreHorizontal32Regular,
} from "@fluentui/react-icons";

import { CollaborationModel } from "../../models/collaborationModel";
import { Widget } from "../lib/Widget";
import { headerStyleWithoutIcon, headerTextStyle } from "../lib/Widget.styles";

export class Collaboration extends Widget<CollaborationModel> {
  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerStyleWithoutIcon()}>
        <Text style={headerTextStyle()}>Area chart</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  bodyContent(): JSX.Element | undefined {
    return <></>;
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
