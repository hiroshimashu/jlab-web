import React from "react";
import KeyVisualImage from "./keyVisualImage";
import KeyMessage from "./keyMessage";

const KeyVisual = () => {
    return (
        <section className = "key-visual" style = {{position: "relative"}}>
            <KeyVisualImage />
            <KeyMessage />
        </section>
    )
}

export default KeyVisual;