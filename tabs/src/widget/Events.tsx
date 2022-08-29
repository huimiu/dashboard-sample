import "@fluent-blocks/basic-icons";
import "./Styles.css";

import { Escape } from "@fluent-blocks/react";
import {
  Divider,
  Label,
  Button,
} from "@fluentui/react-components";
import { CalendarToday24Regular, ArrowRight24Regular } from "@fluentui/react-icons";

import { getEvents } from "../service/Requests";
import EventsModel from "../model/EventsModel";

export default function EventsWidget() {
  const events = getEvents();
  return {
    card: {
      title: [{ text: "Your upcoming events" }],
      body: [
        <Escape contentMeetsAccessibilityAndDesignStandards>
          <div className="cardContainer">
            <div className="eventsContainer">
              <div className="eventsDate">
                <div className="today">
                  <CalendarToday24Regular />
                  <Label className="todayColor">Today</Label>
                </div>
                <div>
                  <Label weight="semibold">Fri, May 13 2022</Label>
                </div>
              </div>
              <div className="eventList">
                {events?.map((event: EventsModel, i) => {
                  return (
                    <div className="eventsDetail">
                      <div className="eventsItem">
                        <Label>{event.startTime}</Label>
                        <Label size="small">{event.duration}</Label>
                      </div>
                      <div className="dividerContainer">
                        <Divider className="divider" vertical />
                      </div>
                      <div className="eventsItem">
                        <Label>{event.title}</Label>
                        <Label size="small">{event.subTitle}</Label>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="actions">
              <Button appearance="primary">Join the meeting</Button>
              <Button icon={<ArrowRight24Regular/>} iconPosition='after' appearance="transparent" size='small'>View More</Button> 
            </div>
          </div>
        </Escape>,
      ] 
    },
  };
}
