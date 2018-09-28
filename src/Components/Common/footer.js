import React from "react";

const Footer = (props) => {
    return (
        <footer className = "footer" style = {{
            fontSize: "12px", 
            letterSpacing : "0.96pt",
            color : "#FFFFFF",
            fontWeight: "lighter",
            width: "100%",
            height: `${props.height}`,
            position: "relative"
        }}>
            <p style = {{
                position: "absolute",
                top: `${props.top}`,
                left: "50%",
                transform:"translateX(-50%)"
            }}>
                Copyright © 2018 JLabs All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer;
