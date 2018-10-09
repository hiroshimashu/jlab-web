import React from "react";
import rectangle1 from "../../static/background_rectangle1.svg";
import rectangle2 from "../../static/background_rectangle2.svg";
import { Parallax } from 'react-scroll-parallax';


const Rectangle = () => {
    return (
        <div>
            <Parallax
                className="rectangle1"
                offsetYMax={-10}
                offsetYMin={10}
                slowerScrollRate
            >
                <img
                    src = { rectangle1 }
                    alt = "rectangle"
                    className="background-rectangle"
                />
            </Parallax>
            <Parallax
                className="rectangle2"
                offsetYMax={10}
                offsetYMin={-10}
                slowerScrollRate
            >
                <img
                src = { rectangle2 }
                alt = "rectangle"
                className="background-rectangle"
                />
            </Parallax>
        </div>
    )

}

export default Rectangle;