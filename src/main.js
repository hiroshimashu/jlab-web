import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AppContainer from "./AppContainer";
import RouteZ from "./Components/RouteZ/routeZ";
import LightBulb from "./Components/LightBulb/lightBulb";
import Recruit from "./Components/Recruit/recruit";
import AvEngine from "./Components/AvEngine/av_engine";
import Mirror from "./Components/Mirror/mirror";
import SoftwareConsulting from "./Components/Consulting/softwareConsulting";
import Gateway from "./Components/zwaveGateway/gateway";
import MiddleWare from "./Components/MIddleWare/middleWare";
import ScrollToTop from "./Components/Common/scrollToTop";

class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Router>
                <div>
                    <ScrollToTop>
                        <Route exact path="/" component={ AppContainer } />
                        <Route path="/routez" component={ RouteZ } />
                        <Route path="/led" component={ LightBulb } />
                        <Route path="/recruit" component={ Recruit } />
                        <Route path="/daw" component={ AvEngine } />
                        <Route path="/mirror" component={ Mirror } />
                        <Route path="/consulting" component={ SoftwareConsulting } />
                        <Route path="/middleware" component={ MiddleWare } />
                        <Route path="/gateway" component={Gateway} />
                    </ScrollToTop>
                </div>
            </Router>

        )
    }
}

export default Main;