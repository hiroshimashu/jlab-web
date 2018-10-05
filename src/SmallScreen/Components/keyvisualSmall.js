import React from "react";
import keyvisual from "../../static/keyvisual_movie_mod.mp4";

const KeyVisualSmall = () => {
    return (
        <div className="keyvisual-small-wrapper" style = { styles.keyvisualWrapper }>
            <video
                src = { keyvisual }
                style = { styles.keyvisualVideo }
            />
        </div>
    )
}

const styles = {
    keyvisualWrapper: {
        width: "100%",
    }
}


export default KeyVisualSmall;