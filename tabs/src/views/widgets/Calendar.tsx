import moment from "moment-timezone";

import { Button, Image, Text } from "@fluentui/react-components";
import {
  ArrowRight16Filled,
  CalendarLtr24Regular,
  MoreHorizontal32Regular,
} from "@fluentui/react-icons";

import { extractTime } from "../../common/dateUtils";
import { TeamsFxContext } from "../../internal/context";
import { CalendarModel } from "../../models/calendarModel";
import { getCalendar } from "../../services/calendarService";
import { Widget } from "../lib/Widget";
import { footerBtnStyle, headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import {
  bodyLayout,
  divider,
  meetingActionBtn,
  meetingItemLayout,
  meetingLayout,
  meetingLocation,
  meetingSummary,
  meetingTime,
  meetingTitle,
  todayLayout,
  todayText,
} from "../styles/Calendar.styles";

export class Calendar extends Widget<CalendarModel[]> {
  protected async getData() {
    return await getCalendar();
  }

  protected headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle}>
        <CalendarLtr24Regular />
        <Text style={headerTextStyle}>Your upcoming events</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  protected bodyContent(): JSX.Element | undefined {
    return (
      <>
        <div style={bodyLayout}>
          <div style={todayLayout}>
            <Text style={todayText}>{moment().format("ll")}</Text>
            <Text style={meetingSummary}>
              {`You have ${this.state.data?.length ?? 0} meetings today. The upcoming events`}
            </Text>
          </div>
          {!this.state.data || this.state.data.length === 0 ? (
            <TeamsFxContext.Consumer>
              {({ themeString }) => (
                <Image
                  src={`empty-${themeString}.svg`}
                  style={{ justifySelf: "center", maxHeight: "200px" }}
                />
              )}
            </TeamsFxContext.Consumer>
          ) : (
            this.state.data?.map((item: CalendarModel, index) => {
              return (
                <div style={meetingItemLayout}>
                  <div style={divider} />
                  <div style={meetingLayout}>
                    <Text style={meetingTitle}>{item.title}</Text>
                    <Text style={meetingTime}>{this.getMeetingTime(item)}</Text>
                    <Text style={meetingLocation}>{item.location}</Text>
                  </div>
                  <Button
                    appearance={index === 0 ? "primary" : "secondary"}
                    onClick={() => window.open(item.url)}
                    style={meetingActionBtn}
                  >
                    {index === 0 ? "Join" : "Chat"}
                  </Button>
                </div>
              );
            })
          )}
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
        style={footerBtnStyle}
        onClick={() => {}} // navigate to detailed page
      >
        View all
      </Button>
    );
  }

  private getMeetingTime = (item: CalendarModel) => {
    return extractTime(item.startTime.dateTime) + " - " + extractTime(item.endTime.dateTime);
  };
}
