import React from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { FluentBlocksProvider } from '@fluent-blocks/react';

import Dashboard from './Dashboard';
import Home from './Home';

export default function App() {
  return (
    <FluentBlocksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </FluentBlocksProvider>
  );
}
