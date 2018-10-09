import React from "react";
import pentagon from "../../static/background_pentagon1.svg";
import pentagon2 from "../../static/background_pentagon2.svg";
import { Parallax } from 'react-scroll-parallax';

const Pentagon = () => {
    return (
        <div>
            <Parallax
                className="pentagon1"
                offsetYMax={-50}
                offsetYMin={20}
                slowerScrollRate
            >
                <img alt = "pentagon" src = { pentagon } className="pentagon"/>
            </Parallax>
            <Parallax
                className="pentagon2"
                offsetYMax={50}
                offsetYMin={-10}
                slowerScrollRate
            >
                <img alt = "pentagon2" src = { pentagon2 } />
            </Parallax>
        </div>
    )
}

export default Pentagon;