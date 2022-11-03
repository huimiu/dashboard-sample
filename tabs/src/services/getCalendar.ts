import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { Client } from "@microsoft/microsoft-graph-client";
import { CalendarItem, CalendarModel } from "../models/calendarModel";
import { FxContext } from "../internal/singletonContext";
import { loginAction } from "../internal/login";

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
export async function getCalendar(): Promise<CalendarModel> {
  var teamsfx: TeamsFx;
  try {
    loginAction(["Calendars.Read"]);
    teamsfx = FxContext.getInstance().getTeamsFx();
    const token = await teamsfx.getCredential().getToken(["Calendars.Read"]);
    let tokenstr = "";
    if (token) tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch (e) {
    alert(e);
    throw e;
  }

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [
      "Calendars.Read",
    ]);
    const calendarResponse = await graphClient
      .api(
        "/me/events?$top=5&$select=subject,bodyPreview,organizer,attendees,start,end,location,onlineMeeting"
      )
      .get();
    const calendarValue = calendarResponse["value"];
    let calendarItems: CalendarItem[] = [];
    for (const obj of calendarValue) {
      const tmp: CalendarItem = {
        startTime: obj["start"],
        endTime: obj["end"],
        title: obj["subject"],
        location: obj["location"]["displayName"],
        url: obj["onlineMeeting"]["joinUrl"]
          ? obj["onlineMeeting"]["joinUrl"]
          : undefined,
      };
      calendarItems.push(tmp);
    }
    return { items: calendarItems };
  } catch (e) {
    console.log(e);
    alert(e);
    throw e;
  }
}
