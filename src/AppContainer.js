import React, { Component } from "react";
import App from "./App";
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from "./Components/Header/header";
import scrollToComponent from 'react-scroll-to-component';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            open: null
        }
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        console.log(this.props.location.state);
        if(this.props.location.state) {
            const { where } = this.props.location.state;
            if( where === "company"){
                scrollToComponent(this.company, {offset: 70, align: "top", duration: 100})
            } else if (where === "product") {
                scrollToComponent(this.product, {offset: 0, align: "top", duration: 100})
            } else if (where === "solution") {
                scrollToComponent(this.solution, {offset: 0, align: "top", duration: 100})
            } else {
                scrollToComponent(this.contact, {offset: 0, align: "top", duration: 100})
            }
        }
    }

    handleResize(e) {
        this.setState(() => {
            return {width: window.innerWidth}
        });
    }

    render() {
        return (
            <ParallaxProvider>
                <Header
                    company = { this.company }
                    product = { this.product }
                    solution = { this.solution }
                    contact = { this.contact }
                    handleResize = { this.handleResize }
                />
                <App
                    companyRef = { el => this.company = el }
                    productRef = { el => this.product = el }
                    solutionRef = { el => this.solution = el }
                    contactRef = { el => this.contact = el }
                />
            </ParallaxProvider>
        );
    }
}



export default AppContainer;
