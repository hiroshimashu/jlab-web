import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const ToRecruit = () => {
    return(
    <Fade bottom>
        <Link to="/recruit">
            <button className = "to-recruit" >
                To Recruit
            </button>
        </Link>
    </Fade>
    )
}

export default ToRecruit;