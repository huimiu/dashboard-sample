import "../style/dashboard.css";
import "../style/cardLayout.css";

import React from "react";

import { Providers, ProviderState } from "@microsoft/mgt-element";
import { TeamsFxProvider } from "@microsoft/mgt-teamsfx-provider";

import Banner from "../card/banner";
import { ChartCard } from "../card/chart";
import Collaboration from "../card/collaboration";
import { Events } from "../card/events";
import { Files } from "../card/files";
import { Task } from "../card/task";
import { loginAction, scope } from "../service/login";
import { FxContext } from "./singletonContext";

interface IDashboardProp {
  showLogin?: boolean;
}

export default class Dashboard extends React.Component<{}, IDashboardProp> {
  constructor(props: any) {
    super(props);
    this.state = {
      showLogin: undefined,
    };
  }

  async componentDidMount() {
    this.initTeamsFxProvider();
    await this.initConsent();
    this.setState({
      showLogin: false,
    });
  }

  initTeamsFxProvider() {
    let teamsfx = FxContext.getInstance().getTeamsFx();
    const provider = new TeamsFxProvider(teamsfx, scope);
    Providers.globalProvider = provider;
  }

  async initConsent() {
    let consentNeeded = await this.checkIsConsentNeeded();
    if (consentNeeded) {
      await this.login();
    } else {
      this.setState({ showLogin: false });
      Providers.globalProvider.setState(ProviderState.SignedIn);
    }
  }

  async checkIsConsentNeeded() {
    let consentNeeded = false;
    try {
      await FxContext.getInstance()
        .getTeamsFx()
        .getCredential()
        .getToken(scope);
    } catch (error) {
      consentNeeded = true;
    }
    return consentNeeded;
  }

  async login() {
    try {
      await loginAction(scope);
      this.setState({ showLogin: false });
      Providers.globalProvider.setState(ProviderState.SignedIn);
    } catch (err: any) {
      if (err.message?.includes("CancelledByUser")) {
        const helpLink = "https://aka.ms/teamsfx-auth-code-flow";
        err.message +=
          '\nIf you see "AADSTS50011: The reply URL specified in the request does not match the reply URLs configured for the application" ' +
          "in the popup window, you may be using unmatched version for TeamsFx SDK (version >= 0.5.0) and Teams Toolkit (version < 3.3.0) or " +
          `cli (version < 0.11.0). Please refer to the help link for how to fix the issue: ${helpLink}`;
      }
      alert("Login failed: " + err);
    }
  }

  render() {
    return (
      <>
        {this.state.showLogin === false && (
          <div className="dashboard">
            <Banner />

            <div className="dashboard-above">
              <div className="dashboard-above-left">
                <ChartCard />
              </div>

              <div className="dashboard-above-right">
                <div className="card-events">
                  {this.state.showLogin === false && <Events />}
                </div>

                <div className="card-task" id="task-card">
                  {this.state.showLogin === false && <Task />}
                </div>
              </div>
            </div>

            <div className="dashboard-bottom">
              <div className="dashboard-bottom-left">
                <Collaboration />
              </div>
              <div className="dashboard-bottom-right">
                {this.state.showLogin === false && <Files />}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
