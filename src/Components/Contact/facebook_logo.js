import React from "react";
import logo from "../../static/facebook.png";
import Fade from "react-reveal/Fade";

const FacebookLogo = () => {
    return (
        <Fade bottom>
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
        </Fade>
    )
}

export default FacebookLogo;