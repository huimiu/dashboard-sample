import { createMicrosoftGraphClient, TeamsFx } from '@microsoft/teamsfx';
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";

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
    const tasklists = await graphClient.api("/me/events?$select=subject,bodyPreview,organizer,attendees,start,end,location").get();
    const myCalendarEvents = tasklists["value"];

    return myCalendarEvents;
  } catch(e) {}  
}