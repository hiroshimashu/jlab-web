import React from "react";
import keyVisualVideo from "../../static/keyvisual_movie_mod.mp4";

const KeyVisualImage = () => {
    return (
        <div className = "key-visual-image-wrapper">
            <video className="key-visual-image" alt ="key-visual"  src = {keyVisualVideo} autoPlay playsInline loop muted style = {styles.keyVisualImage} />
        </div>
    )
}

const styles = {
    keyVisualImage: {
        width: "100%",
    }
}

export default KeyVisualImage;