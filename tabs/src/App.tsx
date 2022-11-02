import { HashRouter as Router, Redirect, Route } from 'react-router-dom';

import { Loader, Provider, teamsTheme } from '@fluentui/react-northstar';
import { useTeamsFx } from '@microsoft/teamsfx-react';

import { TeamsFxContext } from './internal/context';
import IDashboard from './views/dashboards/IDashboard';
import Privacy from './views/Privacy';
import TabConfig from './views/TabConfig';
import TermsOfUse from './views/TermsOfUse';

export default function App() {
  const { loading, theme, themeString, teamsfx } = useTeamsFx();
  return (
    <TeamsFxContext.Provider value={{ theme, themeString, teamsfx }}>
      <Provider
        theme={theme || teamsTheme}
        style={{
          overflow: "auto",
          height: "100vh",
          background: "var(--Background)",
        }}
      >
        <Router>
          <Route exact path="/">
            <Redirect to="/tab" />
          </Route>
          {loading ? (
            <Loader style={{ margin: 100 }} />
          ) : (
            <>
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/termsofuse" component={TermsOfUse} />
              <Route exact path="/dashboard" component={IDashboard} />
              <Route exact path="/config" component={TabConfig} />
            </>
          )}
        </Router>
      </Provider>
    </TeamsFxContext.Provider>
  );
}
