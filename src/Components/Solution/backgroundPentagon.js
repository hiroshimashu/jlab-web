import React from "react";
import pentagon from "../../static/background_pentagon1.svg";
import pentagon2 from "../../static/background_pentagon2.svg";
import { Parallax } from 'react-scroll-parallax';

const Pentagon = () => {
    return (
        <div>
            <Parallax
                className="custom-class3"
                offsetYMax={-50}
                offsetYMin={20}
                slowerScrollRate
                tag="Pentagon"
                styleInner = {{ width: "577.471px", position: "absolute", top: "200.067px",  }}
            >
                <img alt = "pentagon" src = { pentagon } className="pentagon"/>
            </Parallax>
            <Parallax
                className="custom-class3"
                offsetYMax={50}
                offsetYMin={-10}
                slowerScrollRate
                tag="Pentagon"
                styleInner = {{
                    position: "absolute",
                    width: "800.957px",
                    top: "-20.252px",
                    left: "100px"
                }}
            >
                <img alt = "pentagon2" src = { pentagon2 } className="pentagon2" />
            </Parallax>
        </div>
    )
}

export default Pentagon;