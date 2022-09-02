import "./Styles.css";
import "../style/Events.css";
import "../style/CardLayout.css";

import { Divider, Label, Text } from "@fluentui/react-components";
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
        <div className="event-list">
          {events?.map((event: EventsModel, i) => {
            return (
              <div className="eventsDetail">
                <div className="eventsItem">
                  <Label size="large" weight="semibold" key={event.id}>
                    {event.startTime}
                  </Label>
                  <Label size="small" key={event.id}>
                    {event.duration}
                  </Label>
                </div>
                <div className="dividerContainer">
                  <Divider className="divider" vertical />
                </div>
                <div className="eventsItem">
                  <Label size="large" weight="semibold" key={event.id}>
                    {event.title}
                  </Label>
                  <Label size="small" key={event.id}>
                    {event.subTitle}
                  </Label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
