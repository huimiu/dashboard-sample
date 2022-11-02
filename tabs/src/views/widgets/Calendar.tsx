import React from "react";

import { ArrowRight24Filled } from "@fluentui/react-icons";
import {
  Button,
  CalendarIcon,
  MoreIcon,
  Text,
} from "@fluentui/react-northstar";

import { CalendarModel } from "../../models/calendarModel";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import moment from "moment-timezone";
import {
  meetingLocationStyle,
  meetingSummaryStyle,
  meetingTimeStyle,
  meetingTitleStyle,
  todayTextStyle,
} from "../styles/Calendar.styles";
import { getCalendar } from "../../services/getCalendar";

export class Calendar extends Widget<CalendarModel> {
  protected getData(): CalendarModel | undefined {
    let calendar: CalendarModel = { items: [] };
    getCalendar()
      .then((data) => {
        calendar = data;
      })
      .catch((error) => {
        console.log(error);
      });
    return calendar;
  }

  protected headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle()}>
        <CalendarIcon size="large" outline />
        <Text style={headerTextStyle()} content="Your upcoming events" />
        <Button icon={<MoreIcon size="large" />} iconOnly text title="more" />
      </div>
    );
  }

  protected bodyContent(): JSX.Element | undefined {
    return (
      <div style={{ display: "grid", gap: "1.25rem" }}>
        <div style={{ display: "grid", gap: "0.25rem" }}>
          <Text style={todayTextStyle()} content={moment().format("ll")} />
          <Text
            style={meetingSummaryStyle()}
            content={`You have ${
              this.state.data?.items.length ?? 0
            } meetings today. The upcoming events`}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "max-content 1fr max-content",
            gap: "0.625rem",
          }}
        >
          <div
            style={{
              display: "grid",
              width: "6px",
              height: "1fr",
              borderRadius: "3px",
              backgroundColor: "#5b5fc7",
            }}
          />
          <div style={{ display: "grid", gap: "0.25rem" }}>
            <Text style={meetingTitleStyle()} content="Meeting with John Doe" />
            <Text style={meetingTimeStyle()} content="10:00 AM - 11:00 AM" />
            <Text style={meetingLocationStyle()} content="Skype call" />
          </div>
          <Button primary flat content="Join" />
        </div>
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
