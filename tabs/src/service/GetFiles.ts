import FilesModel from "../model/FilesModel";
import {
  createMicrosoftGraphClient,
  TeamsFx,
  UserInfo,
} from "@microsoft/teamsfx";
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";
import { scope } from "./login";

/**
 * @returns :
 * {
 *   "name": string,
 *   "webUrl": string, // use it to open the file in the browser
 *   "createdBy": {
 *      "user": {
 *        "email": string,
 *        "displayName": string
 *      }
 *   },
 *   "lastModifiedBy": {
 *      "user": {
 *        "email": string,
 *        "displayName": string
 *      }
 *   },
 *   "remoteItem": {
 *     "...": ...,
 *     "webDavUrl": string // use it to open the file in the corresponded desktop app
 *     "...": ...
 *   }
 * }
 */
export async function getFiles() {
  const teamsfx = new TeamsFx();
  try {
    let fx = dashboardTeamsFxContext.getTeamsfx();
    let cred = fx?.getCredential();
    let t = await cred?.getToken(scope);
    const token = await dashboardTeamsFxContext
      .getTeamsfx()
      ?.getCredential()
      .getToken(["Files.Read"]);
    let tokenstr = "";
    tokenstr = t!.token;
    teamsfx.setSsoToken(tokenstr);
  } catch (e) {
    console.log(e);
    throw e;
  }

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [
      ".default",
    ]);
    const drives = await graphClient
      .api(
        "/me/drive/recent?$top=3&$select=name,webUrl,createdBy,lastModifiedBy,remoteItem"
      )
      .get();
    const driveInfo = drives["value"];

    let returnAnswer: FilesModel[] = [];
    for (const obj of driveInfo) {
      const tmp: FilesModel = {
        name: obj["name"],
        createdBy: obj["remoteItem"]["createdBy"]["user"]["displayName"],
        lastModifiedBy:
          obj["remoteItem"]["lastModifiedBy"]["user"]["displayName"],
        createdDateTime: obj["remoteItem"]["createdDateTime"],
        lastModifiedDateTime: obj["remoteItem"]["lastModifiedDateTime"],
        type: obj["remoteItem"]["file"]["mimeType"],
        weburl: obj["remoteItem"]["webUrl"],
        webDavurl: obj["remoteItem"]["webDavUrl"],
      };
      returnAnswer.push(tmp);
    }
    return returnAnswer;
  } catch (e) {
    console.log(e);
    throw e;
  }
}
