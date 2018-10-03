import React from "react";
import circle1 from "../../static/background_circle1.svg";
import circle2 from "../../static/background_circle2.svg";
import { Parallax } from 'react-scroll-parallax';

const BackgroundCircle = () => {
    return (
        <div>
            <Parallax
                className="custom-class3"
                offsetYMax={30}
                offsetYMin={-30}
                slowerScrollRate
                tag="Circle"
                styleInner = {{ width: "577.471px", position: "absolute", top: "200.067px"}}
            >
                <img alt = "background-circle" src = { circle1 }  />
            </Parallax>
            <Parallax
                className="custom-class3"
                offsetYMax={-30}
                offsetYMin={30}
                slowerScrollRate
                tag="Circle"
                styleInner = {{ left: "200px", width: "462.044px", position: "absolute", top: "450.067px"}}
            >
                <img alt = "background-circle" src = { circle2 }  />
            </Parallax>
        </div>
    )
}

export default BackgroundCircle;