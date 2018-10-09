import React, { Component } from "react";
import Logo from "../Header/logo";
import scrollToComponent from 'react-scroll-to-component';

class MenuScreen extends Component {
    render() {
        return (
            <div id="menu-wrapper-small" className= { this.props.open }>
                <Logo />
                <div className="menu-main-wrapper-small">
                    <p onClick = {() => {
                        this.props.handleClick();
                        window.scrollTo(0, 0);
                    }}>
                            ホーム
                    </p>
                    <p onClick = {() => {
                        this.props.handleClick();
                        scrollToComponent(this.props.news, {offset: 0, align: "top", duration: 100})}}>
                        News
                    </p>
                    <p onClick = {() => {
                        this.props.handleClick();
                        scrollToComponent(this.props.company, {offset: 0, align: "top", duration: 100})}}>
                        Company
                    </p>
                    <p onClick = {() => {
                        this.props.handleClick();
                        scrollToComponent(this.props.product, {offset: 0, align: "top", duration: 100})}}>
                        Product
                    </p>
                    <p onClick = {() => {
                        this.props.handleClick();
                        scrollToComponent(this.props.solution, {offset: 0, align: "top", duration: 100})}}>
                        Solution
                    </p>
                    <p onClick = {() => {
                        this.props.handleClick();
                        scrollToComponent(this.props.contact, {offset: 0, align: "top", duration: 100})}}>
                        Contact
                    </p>
                </div>
            </div>
        )
    }
}

export default MenuScreen;