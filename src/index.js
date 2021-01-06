import React from 'react';
import { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Router, Route, Switch } from "react-router-dom";

import Home from './components/Home/Home';
import ScanQR from './components/ScanQR/ScanQR';
import SelectCard from './components/SelectCard/SelectCard';

import history from './history';

const App = () => (
  <Router history={history}>
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


//React Router
//https://ultimatecourses.com/blog/programmatically-navigate-react-router


//Data Passing between child and parent component
//https://medium.com/@nipunadilhara/passing-data-between-different-components-using-react-c8e27319ee69

//Router Data Passing
//https://stackoverflow.com/questions/52238637/react-router-how-to-pass-data-between-pages-in-react


//Responsive
//https://codeburst.io/how-to-build-fully-responsive-react-apps-with-nothing-but-inline-styles-and-javascript-242c091b6ba1
reportWebVitals();
