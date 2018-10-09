import React, { Component } from "react";
import logo from "../../static/jlab_logo_small.png";
import jlab from '../../static/jlab_logo_small.png';
import Logo from "../Header/logo";
import { Link } from "react-router-dom";

class MenuScreen extends Component {
    render() {
        return (
            <div className="menu-wrapper-small">
                <Logo />
                <div className="menu-main-wrapper-small">
                    <Link to = "/">
                        <p>
                            ホーム
                        </p>
                    </Link>
                    <Link to = "/news">
                        <p>
                            News
                        </p>
                    </Link>
                    <p>
                        Company
                    </p>
                    <p>
                        Product
                    </p>
                    <p>
                        Solution
                    </p>
                    <p>
                        Contact
                    </p>
                </div>
            </div>
        )
    }
}

export default MenuScreen;