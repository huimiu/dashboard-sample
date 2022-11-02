import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { Client } from "@microsoft/microsoft-graph-client";
import { CalendarItem, CalendarModel } from "../models/calendarModel";
import { FxContext } from "../internal/singletonContext";

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
    teamsfx = FxContext.getInstance().getTeamsFx();
    const token = await teamsfx
      .getCredential()
      .getToken(["Calendars.ReadWrite"]);
    let tokenstr = "";
    if (token) tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch (e) {
    alert(e);
    throw e;
  }

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [
      "Calendars.ReadWrite",
    ]);
    const tasklists = await graphClient
      .api(
        "/me/events?$top=5&$select=subject,bodyPreview,organizer,attendees,start,end,location,onlineMeeting"
      )
      .get();
    const myCalendarEvents = tasklists["value"];
    let returnAnswer: CalendarItem[] = [];
    for (const obj of myCalendarEvents) {
      const tmp: CalendarItem = {
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
    return { items: returnAnswer };
  } catch (e) {
    console.log(e);
    alert(e);
    throw e;
  }
}
