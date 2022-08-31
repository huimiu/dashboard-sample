import React from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { FluentBlocksProvider } from "@fluent-blocks/react";

import BlockDashboard from "./BlockDashboard";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  var basicIcons = require("@fluent-blocks/basic-icons/basic-icons.svg");
  return (
    <FluentBlocksProvider iconSpriteUrl={basicIcons}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/block" element={<BlockDashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </FluentBlocksProvider>
  );
}
