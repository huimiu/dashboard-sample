import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";
import { TodotaskModel } from "../model/TodotaskModel";
import TaskModel from "../model/TaskModel";
import { FxContext } from "../components/singletonContext";
import { scope } from "./login";

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
    alert(e);
  }
}
