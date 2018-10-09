import React from "react";

const FooterSmall = (props) => {
    return (
        <footer className = "footer-small" style = {{
            fontSize: "9px",
            letterSpacing : "0.96pt",
            color : "#FFFFFF",
            fontWeight: "lighter",
            width: "100%",
            height: `${props.height}`,
            position: "relative",
            marginTop: `${props.top}`,
            textAlign: "center"
        }}>
            <p>
                Copyright © 2018 JLabs All Right Reserved.
            </p>
        </footer>
    )
}

export default FooterSmall;
