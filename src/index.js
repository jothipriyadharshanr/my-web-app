import React from 'react';
import { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home/Home';
import ScanQR from './components/ScanQR/ScanQR';
import SelectCard from './components/SelectCard/SelectCard';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/scanqr" component={ScanQR} />
      <Route path="/selectcard" component={SelectCard} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
