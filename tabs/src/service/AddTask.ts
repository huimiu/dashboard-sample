import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";

export async function addTask(title: string) {
  const teamsfx = new TeamsFx();
  try {
    const token = await dashboardTeamsFxContext
      .getTeamsfx()
      ?.getCredential()
      .getToken(["Tasks.ReadWrite"]);
    let tokenstr = "";
    if (token) tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch (e) {
    console.log("add task error:" + e);
  }

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [
      ".default",
    ]);
    const tasklists = await graphClient.api("/me/todo/lists").get();
    const myFirstTaskList = tasklists["value"][0];
    const todoTaskListId: string = myFirstTaskList["id"];

    await graphClient
      .api("/me/todo/lists/" + todoTaskListId + "/tasks")
      .post({ title: title });
  } catch (e) {
    console.log("add task error:" + e);
  }
}
