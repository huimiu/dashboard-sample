import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { Client } from "@microsoft/microsoft-graph-client";
import { TaskModel } from "../models/taskModel";
import { FxContext } from "../internal/singletonContext";

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
export async function getTasks(): Promise<TaskModel[]> {
  let teamsfx: TeamsFx;
  try {
    teamsfx = FxContext.getInstance().getTeamsFx();
    const token = await teamsfx?.getCredential().getToken(["Tasks.ReadWrite"]);
    let tokenstr = "";
    if (token) tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch (e) {
    throw e;
  }

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [
      "Tasks.ReadWrite",
    ]);
    const tasklists = await graphClient.api("/me/todo/lists").get();
    const myFirstTaskList = tasklists["value"][0];

    const todoTaskListId: string = myFirstTaskList["id"];
    const resp = await graphClient
      .api("/me/todo/lists/" + todoTaskListId + "/tasks/")
      .get();
    const tasksInfo = resp["value"];
    let tasks: TaskModel[] = [];
    for (const obj of tasksInfo) {
      const tmp: TaskModel = {
        name: obj["title"],
        status: obj["status"],
        importance: obj["importance"],
        content: obj["content"],
      };
      tasks.push(tmp);
    }
    return tasks;
  } catch (e) {
    throw e;
  }
}
