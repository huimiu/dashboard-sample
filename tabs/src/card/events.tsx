import "../style/events.css";
import "../style/cardLayout.css";

import moment from "moment-timezone";
import React from "react";

import { Button, Label, Text } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import { ArrowRight16Filled } from "@fluentui/react-icons";

import { extractTime, isToday } from "../common/dateUtils";
import EventsModel from "../model/EventsModel";

interface IEventProps {
  events?: EventsModel[];
}

interface IEventState {
  events?: EventsModel[];
}

export class Events extends React.Component<IEventProps, IEventState> {
  constructor(props: IEventProps) {
    super(props);
    const todayEvents = this.todayEvents(props.events!);
    this.state = {
      events: todayEvents,
    };
  }

  todayEvents(events: EventsModel[]): EventsModel[] {
    let todayEvents: EventsModel[] = [];
    for (const e of events) {
      if (isToday(e.startTime.dateTime)) {
        todayEvents.push(e);
      }
    }
    return todayEvents;
  }

  render() {
    return (
      <Card className="card-stretch">
        <CardHeader
          header={
            <Text
              weight="semibold"
              size={400}
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              Your upcoming events
            </Text>
          }
        />
        <div className="card-content">
          {this.state.events && (
            <div className="events-container">
              <div className="summary">
                <Label size="small" weight="semibold">
                  {moment().format("ll")}
                </Label>
                <Label size="small">
                  You have {this.state.events.length} meetings today. The
                  upcoming events
                </Label>
              </div>
              <div className="events-list">
                {this.state.events.map((event: EventsModel, i) => {
                  return (
                    <div className="events-item">
                      <div className="events-item-left">
                        <div className="divider" />
                        <div className="events-content">
                          <Text
                            truncate
                            className="events-title"
                            size={500}
                            key={event.id?.concat("-title")}
                          >
                            {event.title}
                          </Text>
                          <Text
                            className="events-subtitle"
                            size={400}
                            key={event.id?.concat("-time")}
                          >
                            {extractTime(event.startTime.dateTime) +
                              "-" +
                              extractTime(event.endTime.dateTime)}
                          </Text>
                          {event.location && (
                            <Text
                              className="events-location"
                              size={300}
                              key={event.id?.concat("-loc")}
                            >
                              {event.location}
                            </Text>
                          )}
                        </div>
                      </div>
                      <div className="events-item-right">
                        {i === 0 && (
                          <Button
                            className="events-button"
                            appearance="primary"
                            key={event.id?.concat("-button")}
                            onClick={() => window.open(event.url)}
                          >
                            Join
                          </Button>
                        )}
                        {i > 0 && (
                          <Button
                            className="events-button"
                            key={event.id?.concat("-button")}
                            onClick={() => window.open(event.url)}
                          >
                            Chat
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="bottom-action">
            <Button
              appearance="transparent"
              size="small"
              icon={<ArrowRight16Filled />}
              iconPosition="after"
              style={{ color: "#5B5FC7" }}
              onClick={() => {
                window.open("https://outlook.office.com/calendar/view/day");
              }}
            >
              View calendar
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}
