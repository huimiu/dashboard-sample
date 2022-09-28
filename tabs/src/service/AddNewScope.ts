import { Providers, ProviderState } from "@microsoft/mgt-element";
import { TeamsFxProvider } from "@microsoft/mgt-teamsfx-provider";

import { loginAction, scope } from "../service/login";
import { FxContext } from "../components/singletonContext";
import { ErrorWithCode } from "@microsoft/teamsfx";

export async function addNewScope(addscopes: string[]) {
    let newscope = Array.from(new Set(scope.concat(addscopes)));
    let teamsfx = FxContext.getInstance().getTeamsFx();
    try {
        const token = await teamsfx.getCredential().getToken(addscopes);  
    } catch(e) {
        try {
            if (e instanceof ErrorWithCode) await loginAction(addscopes);
            FxContext.getInstance().setTeamsFx(teamsfx);
            const provider = new TeamsFxProvider(teamsfx, newscope);
            Providers.globalProvider = provider;
        } catch(e) {
            console.log(e);
            throw new Error( "Error: Add New Scope Failed.");
        }
    } 
}
