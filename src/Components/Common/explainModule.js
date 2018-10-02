import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const ExplainModule = (props) => {
    return (
        <Fade>
            <div className="explain-wrapper" style = {{position: "absolute", top: `${props.top}`, left:`${props.left}`, display: "flex",}}>
                <img style = {props.imgStyle} src = {props.imgSrc} alt = "explain" />
                <div>
                    <p style = { props.titleStyle } className = "explain-title">
                        {props.title}
                    </p>
                    <p style = { props.explainStyle } className="explain-main">
                        {props.explain}
                    </p>
                    <Link to = {props.to || "/#"}>
                        <button style = {props.buttonStyle}>Click here to read more</button>
                    </Link>
                </div>
            </div>
        </Fade>
    )
}

export default ExplainModule;

