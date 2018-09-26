import React from "react";

const Footer = () => {
    return (
        <footer className = "" style = {{
            fontSize: "12px", 
            letterSpacing : "0.96pt",
            color : "#FFFFFF",
            fontWeight: "lighter",
            width: "100%",
            height: "301.76px",
            position: "relative"
        }}>
            <p style = {{
                position: "absolute",
                top: "215.473px",
                left: "50%",
                transform:"translateX(-50%)"
            }}>
                Copyright © 2018 JLabs All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer;
