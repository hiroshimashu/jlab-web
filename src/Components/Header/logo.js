import React from 'react';
import jlab from '../../static/jlab_logo_small.png';
import { Link } from "react-router-dom";

const logo = () => {
    return (
        <div className="logo-wrapper">
            <Link to = "/">
                <img className = "logo" alt = "jlab-logo-small"  style = { styles.logo } src = { jlab } />
            </Link>
        </div>
    );
}

const styles = {
    logoWrapper: {
        position: "absolute",
        top: "0px",
        left: "41.716px",
        width:"60.523px",
        zIndex: 1,
    },
    logo : {
        width: "100%",
    }
}


export default logo;