import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { Client } from "@microsoft/microsoft-graph-client";
import EventsModel from "../model/EventsModel";
import { FxContext } from "../components/singletonContext";
import { scope } from "./login";

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
  var teamsfx: TeamsFx;
  try {
    teamsfx = FxContext.getInstance().getTeamsFx();
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, scope);
    const tasklists = await graphClient
      .api(
        "/me/events?$top=5&$select=subject,bodyPreview,organizer,attendees,start,end,location,onlineMeeting"
      )
      .get();
      
    const myCalendarEvents = tasklists["value"];
    let returnAnswer: EventsModel[] = [];
    for (const obj of myCalendarEvents) {
      const tmp: EventsModel = {
        startTime: obj["start"],
        endTime: obj["end"],
        title: obj["subject"],
        location: obj["location"] ? obj["location"]["displayName"] : undefined,
        url: obj["onlineMeeting"] && obj["onlineMeeting"]["joinUrl"]
          ? obj["onlineMeeting"]["joinUrl"] 
          : undefined,
      };
      returnAnswer.push(tmp);
    }
    return returnAnswer;
  } catch (e) {
    console.log(e);
    alert(e);
  }
}
