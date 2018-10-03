import React from 'react';
import jlab from '../../static/jlab_logo_small.png';

const logo = () => {
    return (
        <div className="logo-wrapper" style = {styles.logoWrapper}>
            <img className = "logo" alt = "jlab-logo-small"  style = {styles.logo} src = { jlab } />       
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