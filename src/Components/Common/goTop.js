import React from "react";
import top from "../../static/scrollTop.png";
import ScrollUpButton from "react-scroll-up-button";


const GoTop = (props) => {
    return (
      <ScrollUpButton>
        <div  style = {{
            position: "fixed",
            width: "54px",
            height: "54px",
            bottom: "64px",
            right: "60px",
            zIndex: "100"
        }}>
            <img src = { top } alt = "scroll-top" style = {{ width: "100%", height: "100%"}} />
        </div>
      </ScrollUpButton>
    )
}

export default GoTop;