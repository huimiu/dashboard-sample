import moment from "moment-timezone";

import { Button, Text } from "@fluentui/react-components";
import {
  ArrowRight16Filled,
  CalendarLtr24Regular,
  MoreHorizontal32Regular,
} from "@fluentui/react-icons";

import { extractTime } from "../../common/dateUtils";
import { CalendarModel } from "../../models/calendarModel";
import { getCalendar } from "../../services/calendarService";
import { EmptyThemeImg } from "../components/EmptyThemeImg";
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
import { emptyLayout } from "../styles/Common.styles";

interface ICalendarState {
  meetings?: CalendarModel[];
  loading?: boolean;
}

export class Calendar extends Widget<ICalendarState> {
  protected async getData(): Promise<ICalendarState> {
    return { meetings: await getCalendar(), loading: false };
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
    const loading: boolean = !this.state.data || (this.state.data.loading ?? true);
    const hasMeeting = this.state.data?.meetings?.length !== 0;
    return (
      <>
        <div style={bodyLayout}>
          {loading ? (
            <></>
          ) : hasMeeting ? (
            <>
              <div style={todayLayout}>
                <Text style={todayText}>{moment().format("ll")}</Text>
                <Text style={meetingSummary}>
                  {`You have ${
                    this.state.data?.meetings?.length ?? 0
                  } meetings today. The upcoming events`}
                </Text>
              </div>

              {this.state.data?.meetings?.map((item: CalendarModel, index) => {
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
              })}
            </>
          ) : (
            <div style={emptyLayout}>
              <EmptyThemeImg />
              <Text weight="semibold">No meeting today</Text>
            </div>
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
        onClick={() => window.open("https://outlook.office.com/calendar/view/day")}
      >
        View all
      </Button>
    );
  }

  private getMeetingTime = (item: CalendarModel) => {
    return extractTime(item.startTime.dateTime) + " - " + extractTime(item.endTime.dateTime);
  };
}
