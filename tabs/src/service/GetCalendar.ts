import { createMicrosoftGraphClient, TeamsFx } from '@microsoft/teamsfx';
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";
import EventsModel from '../model/EventsModel';

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
    const token = await dashboardTeamsFxContext.getTeamsfx()?.getCredential().getToken(["Calendars.ReadWrite"]);
    let tokenstr = "";
    if (token) tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch(e) {}
  
  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [".default"]);
    const tasklists = await graphClient.api("/me/events?$top=3&$select=subject,bodyPreview,organizer,attendees,start,end,location,onlineMeeting").get();
    const myCalendarEvents = tasklists["value"];
    //console.log(myCalendarEvents);
    const returnAnswer: EventsModel = {
      startTime: myCalendarEvents["startTime"],
      endTime: myCalendarEvents["endTime"],
      title: myCalendarEvents["subject"],
      location: myCalendarEvents["location"]["displayName"],
      url: myCalendarEvents["onlineMeeting"]["joinUrl"]? myCalendarEvents["onlineMeeting"]["joinUrl"]:undefined
    }
    return returnAnswer;
  } catch(e) {}  
}