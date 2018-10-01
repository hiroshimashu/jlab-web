import React from "react";
import KeyVisualImage from "./keyVisualImage";
import KeyMessage from "./keyMessage";
import JlabLogo from "../../static/jlab_logo.png";


const KeyVisual = () => {
    return (
        <section className = "key-visual" style = {{position: "relative"}}>
            <KeyVisualImage />
            <KeyMessage />
        </section>
    )
}

export default KeyVisual;