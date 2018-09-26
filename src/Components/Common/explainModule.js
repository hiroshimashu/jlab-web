import React from "react";

const ExplainModule = (props) => {
    return (
        <div className="explain-wrapper" style = {{position: "absolute", top: `${props.top}`, left:`${props.left}`, display: "flex",}}>
            <img style = {props.imgStyle} src = {props.imgSrc} alt = "explain" />
            <div>
                <p style = { props.titleStyle } className = "explain-title">
                    {props.title}
                </p>
                <p style = { props.explainStyle } className="explain-main">
                    {props.explain}
                </p>
                <button style = {props.buttonStyle}>
                    Click here to read more
                </button>
            </div>
        </div>
    )
}

export default ExplainModule;

