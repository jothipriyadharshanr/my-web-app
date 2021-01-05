import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import CardSelect from "./CardSelect";
import ScanQR from "./ScanQR";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={ScanQR} />
                    <Route path="/cardselect" component={CardSelect} />
                </Switch>
            </Router>
        )
    }
}