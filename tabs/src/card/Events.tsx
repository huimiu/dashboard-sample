import "../style/Events.css";
import "../style/CardLayout.css";

import { Button, Label, Text } from "@fluentui/react-components";
import { Card, CardHeader } from "@fluentui/react-components/unstable";

import EventsModel from "../model/EventsModel";
import { getEvents } from "../service/Requests";

export default function Events() {
  const events = getEvents();
  return (
    <Card className="card-stretch">
      <CardHeader
        header={
          <Text weight="semibold" size={400}>
            Your upcoming events
          </Text>
        }
      />
      <div className="card-content">
        <div className="summary">
          <Label size="small" weight="semibold">
            Aug 31, 2022
          </Label>
          <Label size="small">
            You have 4 meetings today. The upcoming events
          </Label>
        </div>
        <div className="events-list">
          {events?.map((event: EventsModel, i) => {
            return (
              <div className="events-item">
                <div className="events-item-left">
                  <div className="divider" />
                  <div className="events-content">
                    <Text
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
                      {event.startTime + "-" + event.endTime}
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
                  {i == 0 && (
                    <Button
                      className="events-button"
                      appearance="primary"
                      key={event.id?.concat("-button")}
                    >
                      Join
                    </Button>
                  )}
                  {i > 0 && (
                    <Button
                      className="events-button"
                      key={event.id?.concat("-button")}
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
    </Card>
  );
}
