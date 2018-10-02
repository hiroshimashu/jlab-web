import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const ToRecruit = () => {
    return(
    <Fade bottom>
        <Link to="/recruit">
            <button className = "to-recruit" style = {{
                position: "absolute",
                width:"156.527px",
                height: "34px",
                top: "920.342px",
                left: "250.794px",
                backgroundColor:"rgba(116,206,226, 0.2)",
                border:"none",
                color: "#74CEE2",
                fontFamily: "Helvetica Neue, Arial",
                fontSize:"16.41px",
                fontWeight: "lighter",
                borderRadius : "17pt",
                zIndex:1,
            }}>
            To Recruit
        </button>
        </Link>
    </Fade>
    )
}

export default ToRecruit;