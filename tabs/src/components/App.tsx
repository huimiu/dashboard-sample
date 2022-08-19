import React from "react";

import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { HashRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Router> 
        <Route path="/dashbaord" element={Dashboard} />
      </Router>
    </FluentProvider>
  );
}