import React, { Component } from 'react';
import Logo from "./logo";
import { Link } from "react-router-dom"

class HeaderDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="header" style={{height: "107.363px"}}>
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
        left: "50%",
        transform: "translateX(-50%)",
        top: "71.32px",
        color: "#85A2BD",
        width: "380.62px",
        display: "flex",
        justifyContent: "space-between",
        listStyle: "none",
        fontSize: '14.63px',
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        margin: "0px",
    },
    menu: {
        fontSize: '14.63px',
        letterSpacing: "2.55px",
        textDecoration:"none",
        color:"#85A2BD",
    }

}

    export default HeaderDetail;