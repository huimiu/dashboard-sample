// import localInfo from "../../.fx/states/state.local.json";
import devInfo from "../../.fx/states/state.dev.json";

import { Client } from "@microsoft/microsoft-graph-client";
import { createMicrosoftGraphClient, TeamsFx } from "@microsoft/teamsfx";

export async function getInstallationId(teamsfx: TeamsFx, userId: string) {
    try {
        // const info = localInfo;
        const info = devInfo;
        const teamsAppId: string = info["fx-resource-appstudio"]["teamsAppId"];
        const apiPath = "/users/"+userId+"/teamwork/installedApps?$expand=teamsApp,teamsAppDefinition&$filter=teamsApp/externalId eq "+teamsAppId;

        const graphClient: Client = await createMicrosoftGraphClient(teamsfx, ["User.Read"]);
        const appInstallationInfo = await graphClient.api(apiPath).get()["value"];
 
        const installationId = appInstallationInfo["id"];
        return installationId;
    } catch(e) {
    }
}

