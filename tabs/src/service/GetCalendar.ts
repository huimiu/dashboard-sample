import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";
import EventsModel from "../model/EventsModel";
import { loginAction } from "./login";
import { FxContext } from "../components/singletonContext";

/**
 * @returns :
 * {
 *   "subject": string,
 *   "bodyPreview": string,
 *   "start": {
 *     "dateTime": string,
 *     "timeZone": string
 *   },
 *   "end": {
 *     "dateTime": string,
 *     "timeZone": string
 *   },
 *   "location": {
 *     "displayName": string,
 *     "locationType": "default",
 *     "uniqueIdType": "unknown",
 *     "address": {},
 *     "coordinates": {}
 *   },
 *   "attendees": [{
 *     "type": string // required, optional
 *     "status": {},
 *     "emailAddress": {
 *       "name": string,
 *       "address": string
 *     }
 *   }],
 *   "organizer": {
 *     "emailAddress": {
 *       "name": string,
 *       "address": string
 *     }
 *   },
 *   onlineMeeting: {
 *     "joinUrl": string // use it to join the meeting
 *   }
 * }
 */
export async function getCalendar() {
  const teamsfx = new TeamsFx();
  try {
    const token = await FxContext.getInstance()
      .getTeamsFx()
      ?.getCredential()
      .getToken(["Calendars.ReadWrite"]);
    let tokenstr = "";
    if (token) tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch (e) {
    console.log(e);
  }

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [
      ".default",
    ]);
    const tasklists = await graphClient
      .api(
        "/me/events?$top=2&$select=subject,bodyPreview,organizer,attendees,start,end,location,onlineMeeting"
      )
      .get();
    const myCalendarEvents = tasklists["value"];
    //console.log(myCalendarEvents);
    let returnAnswer: EventsModel[] = [];
    for (const obj of myCalendarEvents) {
      const tmp: EventsModel = {
        startTime: obj["start"],
        endTime: obj["end"],
        title: obj["subject"],
        location: obj["location"]["displayName"],
        url: obj["onlineMeeting"]["joinUrl"]
          ? obj["onlineMeeting"]["joinUrl"]
          : undefined,
      };
      returnAnswer.push(tmp);
    }
    return returnAnswer;
  } catch (e) {}
}
