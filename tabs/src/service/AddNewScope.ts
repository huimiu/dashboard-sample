import { Providers, ProviderState } from "@microsoft/mgt-element";
import { TeamsFxProvider } from "@microsoft/mgt-teamsfx-provider";

import { loginAction, scope } from "../service/login";
import { FxContext } from "../components/singletonContext";

export async function addNewScope(addscopes: string[]) {
    let newscope = Array.from(new Set(scope.concat(addscopes)));
    let teamsfx = FxContext.getInstance().getTeamsFx();
    try {
        await teamsfx.getCredential().getToken(addscopes);  
    } catch(e) {
        // Providers.globalProvider.setState(ProviderState.SignedOut);
        await loginAction(newscope);
        const provider = new TeamsFxProvider(teamsfx, newscope);
        Providers.globalProvider = provider;
        // Providers.globalProvider.setState(ProviderState.SignedIn);
        // throw new Error( "Error: Add New Scope Failed.");
    }
}
