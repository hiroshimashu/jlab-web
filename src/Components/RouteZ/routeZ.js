import React, { Component } from "react";
import RoutezDetail from "./routez_detail";
import GoTop from "../../Components/Common/goTop";
import RoutezMenu from "./routez_menu";
import RoutezDemo from "./routeZ_demo";
import Footer from "../Common/footer";
import HeaderDetail from "../Header/header_detail";

class RouteZ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', event => this.watchCurrentPosition())
    }

    watchCurrentPosition() {
        const position =  this.scrollTop();
        if (position > 500) {
            this.setState(() => {
                return (
                    {isScrolled: true}
                )
            })
        } else {
            this.setState(() => {
                return (
                    {isScrolled: false}
                )
            })
        }
    }

    scrollTop() {
        return Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop);
    }

    goTop = () => {
        window.scrollTo(0, 0);
        //document.body.scrollTop = 0; // For Safari
        //document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <div>
                <HeaderDetail />
                { this.state.isScrolled &&  <GoTop handleClick = { this.goTop } />}
                <div className="routeZ-wrapper">
                    <RoutezDetail />
                    <RoutezMenu />
                    <RoutezDemo />
                    <Footer
                        height="379.596px"
                        top="295.309px"
                    />
                </div>
            </div>
        )
    }
}

export default RouteZ;
