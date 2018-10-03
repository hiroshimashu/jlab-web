import React, { Component } from 'react';
import Logo from "./logo";
import { Link } from "react-router-dom"

class HeaderDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="header" style={{height: "0px"}}>
                <Logo />
                <ul className = "menu-wrapper" style = {styles.menuWrapper} >
                    <Link to = {{ pathname:"/", state: { where: "company" } }} style = { styles.menu } >
                        Company
                    </Link>
                    <Link to = {{ pathname:"/", state: { where: "product" } }} style = { styles.menu } >
                        Product
                    </Link>
                    <Link to = {{ pathname:"/", state: { where: "solution" } }} style = { styles.menu } >
                        Solution
                    </Link>
                    <Link to = {{ pathname:"/", state: { where: "contact" } }} style = { styles.menu } >
                        Contact
                    </Link>
                </ul>
            </section>
        )
    }
}

const styles = {
    menuWrapper: {
        position: "absolute",
        zIndex: 1,
        right:"5%",
        top: "38px",
        color: "#ffffff",
        width: "500px",
        display: "flex",
        justifyContent: "space-between",
        listStyle:"none",
        fontSize: '14.63px',
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        margin: "0px",
    },
    menu: {
        fontSize: '17.63px',
        letterSpacing: "2.55px",
    }


}

    export default HeaderDetail;