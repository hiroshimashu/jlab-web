import React from "react";
import rectangle1 from "../../static/background_rectangle1.svg";
import rectangle2 from "../../static/background_rectangle2.svg";
import { Parallax } from 'react-scroll-parallax';


const Rectangle = () => {
    return (
        <div>
            <Parallax
                className="custom-class3"
                offsetYMax={-10}
                offsetYMin={10}
                slowerScrollRate
                tag="Circle"
                styleInner = {{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "100px"
                }}
            >
                <img
                    src = { rectangle1 }
                    alt = "rectangle"
                    className="background-rectangle"
                    style = {{
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }}
                />
            </Parallax>
            <Parallax
                className="custom-class3"
                offsetYMax={10}
                offsetYMin={-10}
                slowerScrollRate
                tag="Circle"
                styleInner = {{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "100px"
                }}
            >
                <img
                src = { rectangle2 }
                alt = "rectangle"
                className="background-rectangle"
                style = {{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "100px"
                }}
                />
            </Parallax>
        </div>
    )

}

export default Rectangle;