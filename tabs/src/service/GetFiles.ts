import FilesModel from "../model/FilesModel";
import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";
import { Client } from "@microsoft/microsoft-graph-client";
import { scope } from "./login";
import { FxContext } from "../components/singletonContext";
import { FilesType } from "../common/filesType"

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
export function generateTeamsUrl(obj: any): string {
  let url = "https://teams.microsoft.com/l/file/";
  // fileId
  const webUrl: string = obj["webUrl"];
  url += webUrl.substring(webUrl.indexOf("sourcedoc=%7B")+13, webUrl.indexOf("%7D"))+"?";
  // filetype
  const fileType: string = obj["remoteItem"]["file"]["mimeType"];
  url += "fileType=" + 
  (fileType==FilesType.WORD? "docx":(
    fileType==FilesType.EXCEL? "xlsx":(
      fileType==FilesType.PPT? "pptx":(
        fileType==FilesType.VISIO? "vsd":fileType.substring(fileType.indexOf("application/"+12))
      )
    )
  ));
  // objectUrl
  const objectURL: string = obj["remoteItem"]["webDavUrl"];
  url += "&objectUrl=" + objectURL.replace(":", "%3A").replace("/", "%2F");
  // baseUrl
  const baseUrl: string = obj["remoteItem"]["sharepointIds"]["siteUrl"];
  url += "&baseUrl=" + baseUrl.replace(":", "%3A").replace("/", "%2F");

  console.log(url);

  return url;
}

export async function getFiles() {
  let teamsfx: TeamsFx;
  try {
    teamsfx = FxContext.getInstance().getTeamsFx();
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, scope);
    const drives = await graphClient
      .api(
        "/me/drive/recent?$top=5&$select=name,webUrl,createdBy,lastModifiedBy,remoteItem"
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
        teamsurl: generateTeamsUrl(obj)
      };
      returnAnswer.push(tmp);
    }
    return returnAnswer;
  } catch (e) {}
}
