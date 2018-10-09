import React, { Component } from "react";
import RoutezDetail from "./routez_detail";
import GoTop from "../../Components/Common/goTop";
import RoutezMenu from "./routez_menu";
import RoutezDemo from "./routeZ_demo";
import Footer from "../Common/footer";
import HeaderDetail from "../Header/header_detail";
import Header from "../Header/header";
import FooterSmall from "../Common/footer_small";
import MenuScreen from "../Menu/menuScreen";

class RouteZ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            isOpen: false,
            width: window.innerWidth
        }
    }

    handleResize = (e) => {
        this.setState(() => {
            return {width: window.innerWidth}
        });
    }

    handleClick = (e) => {
        this.setState(() => {
            return {open: !this.state.open}
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', event => this.watchCurrentPosition())
        window.removeEventListener('resize', this.handleResize);
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
                { this.state.open && <MenuScreen /> }
                { this.state.width > 801  &&  <HeaderDetail />}
                { this.state.width <= 801 && <Header handleResize = { this.handleResize } handleClick = { this.handleClick }/> }
                { this.state.isScrolled && this.state.width > 801 &&  <GoTop handleClick = { this.goTop } />}
                <div className="routeZ-wrapper">
                    <RoutezDetail />
                    <RoutezMenu />
                    <RoutezDemo />
                    <Footer  height="379.596px" top="295.309px" />
                    <FooterSmall top="177.25px" height = "37px"/>
                </div>
            </div>
        )
    }
}

export default RouteZ;
