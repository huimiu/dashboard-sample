import React from "react";

import { ArrowRight24Filled } from "@fluentui/react-icons";
import {
  Button,
  CalendarIcon,
  MoreIcon,
  Text,
} from "@fluentui/react-northstar";

import CalendarModel from "../../models/calendarModel";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";

export class Calendar extends Widget<CalendarModel> {

  protected headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle()}>
        <CalendarIcon size="large" outline/>
        <Text style={headerTextStyle()} content="Your upcoming events" />
        <Button icon={<MoreIcon size="large" />} iconOnly text title="more" />
      </div>
    );
  }

  protected footerContent(): JSX.Element | undefined {
    return (
      <Button
        primary
        text
        icon={<ArrowRight24Filled />}
        iconPosition="after"
        content="View calendar"
        size="small"
        style={{ width: "fit-content" }}
        onClick={() => {}} // navigate to detailed page
      />
    );
  }
}
