import React from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";

import BlockDashboard from "./t1/BlockDashboard";
import Dashboard from "./dashboard";
import Login from "./Login";

export default function App() {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/block" element={<BlockDashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </FluentProvider>
  );
}
