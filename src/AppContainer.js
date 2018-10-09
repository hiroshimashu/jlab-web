import React, { Component } from "react";
import App from "./App";
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from "./Components/Header/header";
import scrollToComponent from 'react-scroll-to-component';
import MenuScreen from "./Components/Menu/menuScreen";

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            open: null,
            isOpen: false,
        }
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        console.log(this.props.location.state);
        if(this.props.location.state) {
            const { where } = this.props.location.state;
            if( where === "company") {
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

    handleClick = () => {
        if(this.state.open === null) {
            this.setState(() => {
                return {
                    open: "open",
                    isOpen: true
                }
            })
        } else {
            this.setState(() => {
                return {
                    open: null,
                    isOpen: false
                }
            })
        }
    }

    handleResize(e) {
        this.setState(() => {
            return { width: window.innerWidth }
        });
    }

    render() {
        console.log(this.state.open);


        return (
            <ParallaxProvider>
                <MenuScreen open = { this.state.open }
                            news = { this.news }
                            company = { this.company }
                            product = { this.product }
                            solution = { this.solution }
                            contact = { this.contact }
                            handleClick = { this.handleClick }
                />
                <Header
                    company = { this.company }
                    product = { this.product }
                    solution = { this.solution }
                    contact = { this.contact }
                    handleResize = { this.handleResize }
                    handleClick = { this.handleClick }
                    isOpen = { this.state.isOpen }
                    open = { this.state.open }
                />
                <App
                    newsRef = { el => this.news = el }
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
