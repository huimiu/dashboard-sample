import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";
import { FxContext } from "../components/singletonContext";
import { scope } from "./login";

export async function addTask(title: string) {
  let teamsfx: TeamsFx;
  try {
    teamsfx = FxContext.getInstance().getTeamsFx();
    const token = await teamsfx?.getCredential().getToken(scope);
    let tokenstr = "";
    if (token) tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch (e) {
    throw e;
  }

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, scope);
    const tasklists = await graphClient.api("/me/todo/lists").get();
    const myFirstTaskList = tasklists["value"][0];
    const todoTaskListId: string = myFirstTaskList["id"];

    let postResponse = await graphClient
      .api("/me/todo/lists/" + todoTaskListId + "/tasks")
      .post({ title: title });
  } catch (e) {
    alert(e);
  }
}
