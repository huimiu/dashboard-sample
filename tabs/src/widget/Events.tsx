import "@fluent-blocks/basic-icons";
import "./Styles.css";

import { Escape } from "@fluent-blocks/react";
import {
  Avatar,
  Divider,
  getNativeElementProps,
  Label,
} from "@fluentui/react-components";
import { CalendarToday24Regular } from "@fluentui/react-icons";

import { getEvents } from "../service/Requests";
import EventsModel from "../model/EventsModel";

export default function EventsWidget() {
  const events = getEvents();
  return {
    card: {
      title: [{ text: "Your upcoming events" }],
      body: [
        <Escape contentMeetsAccessibilityAndDesignStandards>
          <div>
            <div className="eventsDate">
              <div className="today">
                <CalendarToday24Regular />
                <Label className="todayColor">Today</Label>
              </div>
              <div>
                <Label weight="semibold">Fri, May 13 2022</Label>
              </div>
            </div>
            {events?.map((event: EventsModel, i) => {
              return (
                <div className="eventsDetail">
                  <div className="eventsDetailItem">
                    <Label>{event.startTime}</Label>
                    <Label size="small">{event.duration}</Label>
                  </div>
                  <Divider vertical className="divider" />
                  <div className="eventsDetailItem">
                    <Label>{event.title}</Label>
                    <Label size="small">{event.subTitle}</Label>
                  </div>
                </div>
              );
            })}
          </div>
        </Escape>,
      ],
    },
  };
}
