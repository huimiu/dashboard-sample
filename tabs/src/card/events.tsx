import "../style/events.css";
import "../style/cardLayout.css";

import { Button, Label, Text } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";
import { ArrowRight16Filled } from "@fluentui/react-icons";

import EventsModel from "../model/EventsModel";
import { extractTime } from "../common/dateUtils";
import moment from "moment-timezone";

export const Events = (events?: EventsModel[]) => (
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
      {events && (
        <div className="events-container">
          <div className="summary">
            <Label size="small" weight="semibold">
              {moment().format("ll")}
            </Label>
            <Label size="small">
              You have {events.length} meetings today. The upcoming events
            </Label>
          </div>
          <div className="events-list">
            {events.map((event: EventsModel, i) => {
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
        >
          View calendar
        </Button>
      </div>
    </div>
  </Card>
);
