import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import App from "./App";
import RouteZ from "./Components/RouteZ/routeZ";

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={ App } />
                    <Route path="/routez" component={ RouteZ } />
                </div>
            </Router>
        )
    }
}

export default Main;