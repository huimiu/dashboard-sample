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
import {
  headerContentStyle,
  headerTextStyle,
  headerStyleWithoutIcon,
} from "../lib/Widget.styles";

export class File extends Widget<FileModel[]> {
  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerStyleWithoutIcon()}>
        <Text style={headerTextStyle()} content="Your documents" />
        <Button icon={<MoreIcon size="large" />} iconOnly text title="more" />
      </div>
    );
  }

  bodyContent(): JSX.Element | undefined {
    return (
      <>
        <div style={{ display: "grid", gap: "0.25rem" }}>
          {this.state.data?.map((item: FileModel) => {
            return (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "0.25rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.25rem",
                  }}
                >
                  <Image src="file-icon.png" />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: "1fr 1fr",
                      gap: "0.25rem",
                    }}
                  >
                    <Text content={item.name} />
                    <Text
                      content={item.size}
                      size="small"
                      style={{ color: "var(--Text Disabled)" }}
                    />
                  </div>
                </div>
                <Button
                  iconOnly
                  text
                  icon={<Link24Regular />}
                  title="Open"
                  onClick={() => {}}
                />
                <Button
                  iconOnly
                  text
                  icon={<ArrowDownload24Regular />}
                  title="Download"
                  onClick={() => {}}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }

  footerContent(): JSX.Element | undefined {
    return (
      <Button
        primary
        text
        icon={<ArrowRight16Filled />}
        iconOnly
        iconPosition="after"
        content="View all"
        size="small"
        style={{ width: "fit-content" }}
        onClick={() => {}}
      />
    );
  }
}
