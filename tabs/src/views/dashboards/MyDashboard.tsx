import { CSSProperties } from "react";

import { Image, Spinner } from "@fluentui/react-components";

import { loginAction } from "../../internal/login";
import { FxContext } from "../../internal/singletonContext";
import { Dashboard } from "../lib/Dashboard";
import { oneColumn } from "../lib/Dashboard.styles";
import { imgStyle } from "../styles/MyDashboard.styles";
import { Calendar } from "../widgets/Calendar";
import { Chart } from "../widgets/Chart";
import { Collaboration } from "../widgets/Collaboration";
import { Documents } from "../widgets/Document";
import { Task } from "../widgets/Task";
import { Providers, ProviderState } from "@microsoft/mgt-element";
import { TeamsFxProvider } from "@microsoft/mgt-teamsfx-provider";

const scope = ["Files.Read", "Tasks.ReadWrite", "Calendars.Read"];

export default class MyDashboard extends Dashboard {
  protected dashboardLayout(): JSX.Element | undefined {
    return (
      <>
        {this.state.showLogin === false ? (
          <>
            <Image style={imgStyle} src="bg.png" />
            <Chart />
            <div style={oneColumn()}>
              <Calendar />
              <Task />
            </div>
            <Collaboration />
            <Documents />
          </>
        ) : (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Spinner size="huge" />
          </div>
        )}
      </>
    );
  }

  protected columnWidths(): string | undefined {
    return "7fr 3fr";
  }

  async componentDidMount() {
    super.componentDidMount();
    await this.initGraphToolkit();
    await this.initConsent();
  }

  protected customiseDashboardStyle(): CSSProperties | undefined {
    return this.state.showLogin === false
      ? {
          marginTop: "100",
        }
      : {
          padding: 0,
          marginTop: 0,
        };
  }

  async initGraphToolkit() {
    const provider = new TeamsFxProvider(FxContext.getInstance().getTeamsFx(), scope);
    Providers.globalProvider = provider;
  }

  async initConsent() {
    let consentNeeded = await this.checkIsConsentNeeded();
    if (consentNeeded) {
      await loginAction(scope);
    }
    this.setState({ showLogin: false });
    Providers.globalProvider.setState(ProviderState.SignedIn);
  }

  async checkIsConsentNeeded() {
    let consentNeeded = false;
    try {
      await FxContext.getInstance().getTeamsFx().getCredential().getToken(scope);
    } catch (error) {
      consentNeeded = true;
    }
    return consentNeeded;
  }
}
