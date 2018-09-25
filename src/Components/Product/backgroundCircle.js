import React from "react";
import circle from "../../static/background_circle.svg";

const BackgroundCircle = () => {
    return (
        <img src = { circle } style = {{ width: "805.243px", position: "absolute", top: "343.067px", marginLeft: "calc((100% - 805.243px) / 2)"}} />
    )
}

export default BackgroundCircle;