import moment from "moment-timezone";
import React from "react";

import { ArrowRight24Filled } from "@fluentui/react-icons";
import {
  Button,
  CalendarIcon,
  MoreIcon,
  Text,
} from "@fluentui/react-northstar";

import { extractTime } from "../../common/dateUtils";
import { CalendarModel } from "../../models/calendarModel";
import { getCalendar } from "../../services/getCalendar";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import {
  divider,
  meetingItemLayout,
  meetingLocation,
  meetingSummary,
  meetingTime,
  meetingTitle,
  todayText,
} from "../styles/Calendar.styles";

export class Calendar extends Widget<CalendarModel[]> {
  protected async getData() {
    return await getCalendar();
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
      <>
        <div style={{ display: "grid", gap: "1.25rem" }}>
          <div style={{ display: "grid", gap: "0.25rem" }}>
            <Text style={todayText()} content={moment().format("ll")} />
            <Text
              style={meetingSummary()}
              content={`You have ${
                this.state.data?.length ?? 0
              } meetings today. The upcoming events`}
            />
          </div>
          {this.state.data?.map((item: CalendarModel, index) => {
            return (
              <div style={meetingItemLayout()}>
                <div style={divider()} />
                <div style={{ display: "grid", gap: "0.25rem" }}>
                  <Text style={meetingTitle()} content={item.title} />
                  <Text
                    style={meetingTime()}
                    content={this.getMeetingTime(item)}
                  />
                  <Text style={meetingLocation()} content={item.location} />
                </div>
                {index === 0 ? (
                  <Button
                    primary
                    flat
                    content="Join"
                    onClick={() => window.open(item.url)}
                  />
                ) : (
                  <Button
                    primary
                    flat
                    tinted
                    content="Chat"
                    onClick={() => window.open(item.url)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  }

  protected footerContent(): JSX.Element | undefined {
    return (
      <Button
        primary
        text
        iconOnly
        icon={<ArrowRight24Filled />}
        iconPosition="after"
        content="View calendar"
        size="small"
        style={{ width: "fit-content" }}
        onClick={() => {
          window.open("https://outlook.office.com/calendar/view/day");
        }} // navigate to detailed page
      />
    );
  }

  private getMeetingTime = (item: CalendarModel) => {
    return (
      extractTime(item.startTime.dateTime) +
      " - " +
      extractTime(item.endTime.dateTime)
    );
  };
}
