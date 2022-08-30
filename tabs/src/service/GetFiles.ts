import FilesModel from '../model/FilesModel';
import { createMicrosoftGraphClient, TeamsFx, UserInfo } from '@microsoft/teamsfx';
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";

export async function getFiles() {
  const teamsfx = new TeamsFx();
  try {
    const token = await dashboardTeamsFxContext.getTeamsfx()?.getCredential().getToken(["Files.Read"]);
    let tokenstr;
    if (!token) tokenstr = ""; 
    else tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch(e) {}  

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [".default"]);
    const drives = await graphClient.api("/me/drive/recent").get();
    const files[] = drives["value"];
    console.log(drives);

    return drives;
  } catch(e) {}
};