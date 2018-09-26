import React from "react";
import rectangle from "../../static/background_rectangle.svg";

const Rectangle = () => {
    return (
        <img
            src = { rectangle }
            alt = "rectangle"
            className="background-rectangle"
            style = {{
                position: "absolute",
                width: "100%",
                height: "100%"
            }}
        />
    )

}

export default Rectangle;