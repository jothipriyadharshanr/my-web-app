import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Home from './components/Home/Home';
import ScanQR from './components/ScanQR/ScanQR';
import SelectCard from './components/SelectCard/SelectCard';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/scanqr">
            <ScanQR />
          </Route>
          <Route path="/selectcard">
            <SelectCard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
