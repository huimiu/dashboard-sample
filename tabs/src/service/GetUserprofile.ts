import { createMicrosoftGraphClient, TeamsFx, UserInfo } from '@microsoft/teamsfx';
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";
import { UserprofileModel } from '../model/UserprofileModel';

var profile: any;
export async function getUserprofile() {
  const teamsfx = new TeamsFx();
  try {
    const token = await dashboardTeamsFxContext.getTeamsfx()?.getCredential().getToken(["User.Read"]);
    let tokenstr;
    if (!token) tokenstr = ""; 
    else tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch(e) {}

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [".default"]);
    profile = await graphClient.api("/me").get();
    const ans : UserprofileModel = {
      id: profile["id"], 
      mail: profile["mail"], 
      userPrincipalName: profile["userPrincipalName"]
    };
    
    //console.log(ans);
    return ans;
  } catch(e) {}

  //return profile;
}