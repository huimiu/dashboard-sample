import { createMicrosoftGraphClient, TeamsFx } from '@microsoft/teamsfx';
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";
import { GroupprofileModel } from '../model/GroupprofileModel';

export async function getGroupProfile() {
  const teamsfx = new TeamsFx();
  try {
    const token = await dashboardTeamsFxContext.getTeamsfx()?.getCredential().getToken(["Directory.ReadWrite.All"]);
    let tokenstr = "";
    if (token) tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch(e) {}
  
  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [".default"]);
    const groups = await graphClient.api("/groups").get();
    const myFirstGroup = groups["value"][0];
    const groupName = myFirstGroup["displayName"];
    const groupDescription = myFirstGroup["description"];
    const groupMail = myFirstGroup["mail"];
    
    const id: string = myFirstGroup["id"];
    const owners = await graphClient.api("/groups/"+id+"/owners").get();
    const ownersArray: Array<any> = owners["value"];
    const ownersNames = ownersArray.map((obj: any) => {return obj["displayName"]});

    const returnGroupProfile: GroupprofileModel = {
      groupName: groupName,
      groupDescription: groupDescription,
      groupMail: groupMail,
      leaders: ownersNames
    }

    return returnGroupProfile;
  } catch(e) {}  
}