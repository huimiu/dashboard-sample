import { createMicrosoftGraphClient, TeamsFx } from '@microsoft/teamsfx';
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";
import { TodotaskModel } from '../model/TodotaskModel';

export async function getTasks() {
  const teamsfx = new TeamsFx();
  try {
    const token = await dashboardTeamsFxContext.getTeamsfx()?.getCredential().getToken(["Tasks.ReadWrite"]);
    let tokenstr = "";
    if (token) tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch(e) {}
  
  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [".default"]);
    const tasklists = await graphClient.api("/me/todo/lists").get();
    const myFirstTaskList = tasklists["value"][0];

    const todoTaskListId: string = myFirstTaskList["id"];
    const tasks = await graphClient.api("/me/todo/lists/"+todoTaskListId+"/tasks").get();
    const tasksArray: Array<any> = tasks["value"];
    const tasksInfo = tasksArray.map((obj: any) => {return {title: obj["title"], categories: obj["categories"]}});
    console.log(tasksInfo);
    return tasksInfo;
  } catch(e) {}  
}