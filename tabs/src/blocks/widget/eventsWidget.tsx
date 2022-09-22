import "../../style/cardLayout.css";
import "../../style/events.css";

import moment from "moment-timezone";
import React from "react";

import { Escape } from "@fluent-blocks/react";
import { WidgetPropsOrElement } from "@fluent-blocks/react/types/blocks/Card/exemplars/Widget";
import { Button, Label, Text } from "@fluentui/react-components";
import { ArrowRight16Filled } from "@fluentui/react-icons";

import { extractTime, isToday } from "../../common/dateUtils";
import EventsModel from "../../model/EventsModel";
import { getEvents } from "../../service/request";

export default function Events(): WidgetPropsOrElement {
  return {
    widget: {
      title: "Your upcoming events",
      label: "events-widget",
      tabs: [
        {
          tab: {
            label: "events-content",
          },
          panel: [
            <Escape contentMeetsAccessibilityAndDesignStandards>
              <EventsContent events={getEvents()} />
            </Escape>,
          ],
        },
      ],
    },
  };
}

interface IEventProps {
  events?: EventsModel[];
}

interface IEventState {
  events?: EventsModel[];
}

class EventsContent extends React.Component<IEventProps, IEventState> {
  constructor(props: IEventProps) {
    super(props);
    const todayEvents = props.events!;
    this.state = {
      events: todayEvents,
    };
  }

  render() {
    return (
      <div className="card-content">
        {this.state.events && (
          <div className="events-container">
            <div className="summary">
              <Label size="small" weight="semibold">
                {moment().format("ll")}
              </Label>
              <Label size="small">
                You have {this.state.events.length} meetings today. The upcoming
                events
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
                          {event.startTime.dateTime +
                            "-" +
                            event.endTime.dateTime}
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
    );
  }
}
