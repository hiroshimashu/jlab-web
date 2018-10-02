import React from "react";
import circle from "../../static/background_circle.svg";
import { Parallax } from 'react-scroll-parallax';

const BackgroundCircle = () => {
    return (
        <Parallax
            className="custom-class3"
            offsetYMax={10}
            offsetYMin={-50}
            slowerScrollRate
            tag="Circle"
            styleInner = {{left:"120px", width: "805.243px", position: "absolute", top: "343.067px"}}
        >
            <img alt = "background-circle" src = { circle }  />
        </Parallax>
    )
}

export default BackgroundCircle;