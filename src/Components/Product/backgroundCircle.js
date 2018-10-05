import React from "react";
import circle1 from "../../static/background_circle1.svg";
import circle2 from "../../static/background_circle2.svg";
import { Parallax } from 'react-scroll-parallax';

const BackgroundCircle = () => {
    return (
        <div>
            <Parallax
                className="circle1"
                offsetYMax={100}
                offsetYMin={-30}
                slowerScrollRate
            >
                <img alt = "background-circle" src = { circle1 }  />
            </Parallax>
            <Parallax
                className="circle2"
                offsetYMax={-100}
                offsetYMin={30}
                slowerScrollRate
            >
                <img alt = "background-circle" src = { circle2 }  />
            </Parallax>
        </div>
    )
}

export default BackgroundCircle;