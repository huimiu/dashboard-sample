import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";
import { TodotaskModel } from "../model/TodotaskModel";
import TaskModel from "../model/TaskModel";
import { FxContext } from "../components/singletonContext";

/**
 * @returns :
 * [
 *   {
 *     ...,
 *     "importance": string, // normal
 *     "status": string, // notStarted
 *     "title": string,
 *     "createdDateTime": string,
 *     "lastModifiedDateTime": string,
 *     "categories": [],
 *     "body": {
 *       "content": string,
 *       "contentType": "text"
 *     }
 *   }
 * ]
 */
export async function getTasks() {
  const teamsfx = new TeamsFx();
  try {
    const token = await FxContext.getInstance()
      .getTeamsFx()
      ?.getCredential()
      .getToken(["Tasks.ReadWrite"]);
    let tokenstr = "";
    if (token) tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch (e) {
    console.log("get task error:" + e);
    throw e;
  }

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [
      ".default",
    ]);
    const tasklists = await graphClient.api("/me/todo/lists").get();
    const myFirstTaskList = tasklists["value"][0];

    const todoTaskListId: string = myFirstTaskList["id"];
    const tasks = await graphClient
      .api("/me/todo/lists/" + todoTaskListId + "/tasks/")
      .get();
    const tasksInfo = tasks["value"];
    let returnAnswer: TaskModel[] = [];
    for (const obj of tasksInfo) {
      const tmp: TaskModel = {
        name: obj["title"],
        status: obj["status"],
        importance: obj["importance"],
        content: obj["content"],
      };
      returnAnswer.push(tmp);
    }
    return returnAnswer;
    // return tasksInfo;
  } catch (e) {
    console.log("get task error:" + e);
  }
}
