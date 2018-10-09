import React, { Component } from "react";
import Logo from "../Header/logo";
import { Link } from "react-router-dom";

class MenuScreenDetail extends Component {
    render() {
        return (
            <div id="menu-wrapper-small" className= { this.props.open }>
                <Logo />
                <div className="menu-main-wrapper-small">
                    <Link to = "/">
                        <p>
                        ホーム
                        </p>
                    </Link>
                    <Link to = {{ pathname:"/", state: { where: "news" } }}>
                        <p>
                        News
                        </p>
                    </Link>
                    <Link to = {{ pathname:"/", state: { where: "company" } }}>
                        <p>
                        Company
                        </p>
                    </Link>
                    <Link to = {{ pathname:"/", state: { where: "product" } }}>
                        <p>
                        Product
                        </p>
                    </Link>
                    <Link to = {{ pathname:"/", state: { where: "solution" } }}>
                        <p>
                        Solution
                        </p>
                    </Link>
                    <Link to = {{ pathname:"/", state: { where: "contact" } }}>
                        <p>
                        Contact
                        </p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MenuScreenDetail;