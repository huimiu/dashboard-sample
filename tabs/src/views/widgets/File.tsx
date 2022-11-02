import React from "react";

import {
  ArrowDownload24Regular,
  ArrowRight16Filled,
  Link24Regular,
  MoreHorizontal16Filled,
} from "@fluentui/react-icons";
import { Button, Image, MoreIcon, Text } from "@fluentui/react-northstar";

import { FileModel } from "../../models/fileModel";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle, headerStyleWithoutIcon } from "../lib/Widget.styles";

export class File extends Widget<FileModel> {

  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerStyleWithoutIcon()}>
        <Text style={headerTextStyle()} content="Your documents" />
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
