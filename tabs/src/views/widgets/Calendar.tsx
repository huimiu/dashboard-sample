import moment from "moment-timezone";

import { Button, Text, tokens } from "@fluentui/react-components";
import {
  ArrowRight16Filled,
  CalendarLtr32Regular,
  MoreHorizontal32Regular,
} from "@fluentui/react-icons";

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
    // return await getCalendar();
    return new Promise<CalendarModel[]>(() => {});
  }

  protected headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle()}>
        <CalendarLtr32Regular style={{ height: "1.5rem", width: "1.5rem" }} />
        <Text style={headerTextStyle()}>Area chart</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  protected bodyContent(): JSX.Element | undefined {
    return (
      <>
        <div style={{ display: "grid", gap: "1.25rem" }}>
          <div style={{ display: "grid", gap: "0.25rem" }}>
            <Text style={todayText()}>{moment().format("ll")}</Text>
            <Text style={meetingSummary()}>
              {`You have ${
                this.state.data?.length ?? 0
              } meetings today. The upcoming events`}
            </Text>
          </div>
          {this.state.data?.map((item: CalendarModel, index) => {
            return (
              <div style={meetingItemLayout()}>
                <div style={divider()} />
                <div style={{ display: "grid", gap: "0.25rem" }}>
                  <Text style={meetingTitle()}>{item.title}</Text>
                  <Text style={meetingTime()}>{this.getMeetingTime(item)}</Text>
                  <Text style={meetingLocation()}>{item.location}</Text>
                </div>
                <Button
                  appearance={index === 0 ? "primary" : "transparent"}
                  onClick={() => window.open(item.url)}
                >
                  {index === 0 ? "Join" : "Chat"}
                </Button>
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

  private getMeetingTime = (item: CalendarModel) => {
    return (
      extractTime(item.startTime.dateTime) +
      " - " +
      extractTime(item.endTime.dateTime)
    );
  };
}
