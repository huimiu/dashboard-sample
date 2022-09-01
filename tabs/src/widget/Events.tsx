import "../card/Styles.css";

import { Escape } from "@fluent-blocks/react";
import { WidgetPropsOrElement } from "@fluent-blocks/react/types/blocks/Card/exemplars/Widget";
import { Image, Label, Divider } from "@fluentui/react-components";
import { CardHeader } from "@fluentui/react-components/unstable";
import {
  Add24Regular,
  ArrowRight24Regular,
  MoreHorizontal20Filled,
  Star24Regular,
} from "@fluentui/react-icons";

import EventsModel from "../model/EventsModel";
import { getEvents } from "../service/Requests";

export default function Events(): WidgetPropsOrElement {
  const events = getEvents();
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
              <div className="flex-content">
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
                            <Label size="large" weight="semibold">
                              {event.startTime}
                            </Label>
                            <Label size="small">{event.duration}</Label>
                          </div>
                          <div className="dividerContainer">
                            <Divider className="divider" vertical />
                          </div>
                          <div className="eventsItem">
                            <Label size="large" weight="semibold">
                              {event.title}
                            </Label>
                            <Label size="small">{event.subTitle}</Label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Escape>,
          ],
        },
      ],
    },
  };
}
