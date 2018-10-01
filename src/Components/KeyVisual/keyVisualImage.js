import React from "react";
import keyVisualVideo from "../../static/keyvisual_movie.mp4";

const KeyVisualImage = () => {
    return (
        <div className = "key-visual-image-wrapper">
            <video className="key-visual-image" alt ="key-visual"  src = {keyVisualVideo} autoPlay loop muted style = {styles.keyVisualImage} />
        </div>
    )
}

const styles = {
    keyVisualImage: {
        width: "100%",
    }
}

export default KeyVisualImage;