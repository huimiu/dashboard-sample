import FilesModel from '../model/FilesModel';
import { createMicrosoftGraphClient, TeamsFx, UserInfo } from '@microsoft/teamsfx';
import { dashboardTeamsFxContext } from "../components/Context";
import { Client } from "@microsoft/microsoft-graph-client";

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
    const token = await dashboardTeamsFxContext.getTeamsfx()?.getCredential().getToken(["Files.Read"]);
    let tokenstr = "";
    if (token) tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch(e) {}  

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [".default"]);
    const drives = await graphClient.api("/me/drive/recent?$top=3&$select=name,webUrl,createdBy,lastModifiedBy,remoteItem").get();
    // console.log(drives);
    const returnAnswer: FilesModel = {
      name: drives["name"],
      createdBy: drives["remoteItem"]["createdBy"]["user"]["displayName"],
      lastModifiedBy: drives["remoteItem"]["lastModifiedBy"]["user"]["displayName"],
      createdDateTime: drives["remoteItem"]["createdDateTime"],
      lastModifiedDateTime: drives["remoteItem"]["lastModifiedDateTime"],
      weburl: drives["remoteItem"]["webUrl"],
      webDavurl: drives["remoteItem"]["webDavUrl"]
    }
    return returnAnswer;
  } catch(e) {}
};