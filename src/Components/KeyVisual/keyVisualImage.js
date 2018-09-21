import React from "react";
import keyVisualImage from "../../static/key_visual.png";

const KeyVisualImage = () => {
    return (
        <div className = "key-visual-image-wrapper">
            <img className="key-visual-image" src = { keyVisualImage } alt ="key-visual" style = {styles.keyVisualImage}/>
        </div>
    )
}

const styles = {
    keyVisualImage: {
        width: "100%",
    }
}

export default KeyVisualImage;