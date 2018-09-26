import React from "react";
import pentagon from "../../static/background_pentagon.svg";

const Pentagon = () => {
    return (
        <img alt = "pentagon" src = { pentagon } className="pentagon" style = {{
            position: "absolute",
            width: "857.957px",
            top: "78.252px",
            left: "calc((100% - 857.957px) / 2)"
        }}/>
    )
}

export default Pentagon;