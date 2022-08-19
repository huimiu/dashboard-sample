import React from "react";

import { FluentBlocksProvider} from '@fluent-blocks/react';
import { HashRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <FluentBlocksProvider>
      <Router> 
        <Route path="/dashbaord" element={Dashboard} />
      </Router>
    </FluentBlocksProvider>
  );
}