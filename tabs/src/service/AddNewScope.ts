import { Providers, ProviderState } from "@microsoft/mgt-element";
import { TeamsFxProvider } from "@microsoft/mgt-teamsfx-provider";

import { loginAction, scope } from "../service/login";
import { FxContext } from "../components/singletonContext";

export async function addNewScope(addscopes: string[]) {
    let newscope = Array.from(new Set(scope.concat(addscopes)));
    try {
        Providers.globalProvider.setState(ProviderState.SignedOut);
        await loginAction(newscope);
        let teamsfx = FxContext.getInstance().getTeamsFx();
        const provider = new TeamsFxProvider(teamsfx, newscope);
        Providers.globalProvider = provider;
        Providers.globalProvider.setState(ProviderState.SignedIn);
    } catch(e) {
        throw new Error( "Error: Add New Scope Failed.");
    }
}
