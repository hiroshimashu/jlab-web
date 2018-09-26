import React from "react";
import logo from "../../static/facebook.png";

const FacebookLogo = () => {
    return (
        <a>
            <img
                className = "facebook-logo"
                src = { logo }
                alt = "facebook"
                style = {{
                    position:"absolute",
                    width: "61.002px",
                    height: "61.002px",
                    left: "511.541px",
                    top: "906.841px"
                }}
            />
        </a>
    )
}

export default FacebookLogo;