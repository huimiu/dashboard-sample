import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { Client } from "@microsoft/microsoft-graph-client";
import { CalendarModel } from "../models/calendarModel";
import { FxContext } from "../internal/singletonContext";

export async function getCalendar(): Promise<CalendarModel[]> {
  var teamsfx: TeamsFx;
  try {
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
        `/me/events?$top=2&$select=subject,bodyPreview,organizer,attendees,start,end,location,onlineMeeting&$filter=start/dateTime ge '${new Date().toDateString()}'`
      )
      .get();
    const calendarValue = calendarResponse["value"];
    let calendarItems: CalendarModel[] = [];
    for (const obj of calendarValue) {
      const tmp: CalendarModel = {
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
    return calendarItems.reverse();
  } catch (e) {
    console.log(e);
    alert(e);
    throw e;
  }
}
