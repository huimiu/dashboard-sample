import "../style/dashboard.css";
import "../style/cardLayout.css";

import React from "react";

import { Providers, ProviderState } from "@microsoft/mgt-element";
import { CacheService } from "@microsoft/mgt-react";
import { FxContext } from "./singletonContext";
import Chart from "../card/chart";
import Collaboration from "../card/collaboration";
import Events from "../card/events";
import Files from "../card/files";
import Task from "../card/task";
import { initTeamsFx, loginAction, scope } from "../service/login";
import Banner from "../card/banner";
import { TeamsFxProvider } from "@microsoft/mgt-teamsfx-provider";

interface IDashboardProp {
  showLogin?: boolean;
}

export default class Dashboard extends React.Component<{}, IDashboardProp> {
  constructor(props: any) {
    super(props);
    this.state = {
      showLogin: false,
    };
    this.login();
  }

  async initConsent() {
    let consentNeeded = await this.checkIsConsentNeeded();
    if (consentNeeded) {
      this.login();
    } else {
      this.state = { showLogin: false };
    }
  }

  async login() {
    try {
      await loginAction();
      this.state = { showLogin: false };
    } catch (err: any) {
      if (err.message?.includes("CancelledByUser")) {
        const helpLink = "https://aka.ms/teamsfx-auth-code-flow";
        err.message +=
          '\nIf you see "AADSTS50011: The reply URL specified in the request does not match the reply URLs configured for the application" ' +
          "in the popup window, you may be using unmatched version for TeamsFx SDK (version >= 0.5.0) and Teams Toolkit (version < 3.3.0) or " +
          `cli (version < 0.11.0). Please refer to the help link for how to fix the issue: ${helpLink}`;
      }
      alert("Login failed: " + err);
      return;
    }
  }

  async componentDidMount() {}

  async checkIsConsentNeeded() {
    let consentNeeded = false;
    try {
      FxContext.getInstance().getTeamsFx()?.getCredential().getToken(scope);
    } catch (error) {
      consentNeeded = true;
    }
    this.state = {
      showLogin: consentNeeded,
    };
    Providers.globalProvider.setState(
      consentNeeded ? ProviderState.SignedOut : ProviderState.SignedIn
    );
    return consentNeeded;
  }

  render() {
    return (
      <>
        {this.state.showLogin === false && (
          <div className="dashboard">
            <Banner />
            <div className="dashboard-above">
              <div className="dashboard-above-left">
                <Chart />
              </div>
              <div className="dashboard-above-right">
                <div className="card-events">
                  <Events />
                </div>
                <div className="card-task">
                  <Task />
                </div>
              </div>
            </div>

            <div className="dashboard-bottom">
              <div className="dashboard-bottom-left">
                <Collaboration />
              </div>
              <div className="dashboard-bottom-right">
                <Files />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
