import { Image } from "@fluentui/react-components";
import { loginAction } from "../../internal/login";
import { FxContext } from "../../internal/singletonContext";

import { Dashboard } from "../lib/Dashboard";
import { oneColumn } from "../lib/Dashboard.styles";
import { Calendar } from "../widgets/Calendar";
import { Chart } from "../widgets/Chart";
import { Collaboration } from "../widgets/Collaboration";
import { Documents } from "../widgets/Document";
import { Task } from "../widgets/Task";

const scope = ["Files.Read", "Tasks.ReadWrite", "Calendars.Read"];

export default class IDashboard extends Dashboard {
  async componentDidMount() {
    super.componentDidMount();
    await this.initConsent();
  }

  protected headerImage(): JSX.Element | undefined {
    return <Image src="bg.png" style={{ marginBottom: "-9rem" }} />;
  }

  protected columnWidths(): string | undefined {
    return "7fr 3fr";
  }

  protected dashboardLayout(): JSX.Element | undefined {
    return (
      <>
        {this.state.showLogin === false && (
          <>
            <Chart />
            <div style={oneColumn()}>
              <Calendar />
              <Task />
            </div>
            <Collaboration />
            <Documents />
          </>
        )}
      </>
    );
  }

  async initConsent() {
    let consentNeeded = await this.checkIsConsentNeeded();
    if (consentNeeded) {
      await loginAction(scope);      
    }
    this.setState({ showLogin: false });
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
  
}
