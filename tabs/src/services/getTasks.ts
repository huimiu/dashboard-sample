import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { Client } from "@microsoft/microsoft-graph-client";
import { TaskItem, TaskModel } from "../models/taskModel";
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
export async function getTasks(): Promise<TaskModel> {
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
    const tasks = await graphClient
      .api("/me/todo/lists/" + todoTaskListId + "/tasks/")
      .get();
    const tasksInfo = tasks["value"];
    let returnAnswer: TaskItem[] = [];
    for (const obj of tasksInfo) {
      const tmp: TaskItem = {
        name: obj["title"],
        status: obj["status"],
        importance: obj["importance"],
        content: obj["content"],
      };
      returnAnswer.push(tmp);
    }
    return { data: returnAnswer };
  } catch (e) {
    throw e;
  }
}
