import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import App from "./App";
import RouteZ from "./Components/RouteZ/routeZ";
import LightBulb from "./Components/LightBulb/lightBulb";
import Recruit from "./Components/Recruit/recruit";
import AvEngine from "./Components/AvEngine/av_engine";

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={ App } />
                    <Route path="/routez" component={ RouteZ } />
                    <Route path="/led" component={ LightBulb } />
                    <Route path="/recruit" component={ Recruit } />
                    <Route path="/daw" component={ AvEngine } />
                </div>
            </Router>
        )
    }
}

export default Main;