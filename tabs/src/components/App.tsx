import React from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { FluentBlocksProvider } from '@fluent-blocks/react';

import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';

export default function App() {
  var basicIcons = require('@fluent-blocks/basic-icons/basic-icons.svg');
  return (
    <FluentBlocksProvider iconSpriteUrl={basicIcons}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </FluentBlocksProvider>
  );
}
