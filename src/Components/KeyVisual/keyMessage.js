import React from "react";
import JlabLogo from "../../static/jlab_logo.png";

const KeyMessage = () => {
    return (
        <div className = "key-meassage" style = {styles.KeyMessage}>
            <img src = { JlabLogo } alt = "jlab-logo" style = {{
                position: "absolute",
                width: "100%"
            }}/>
            <p style = {{
                position: "absolute",
                left: "76.71px",
                top: "180.777px"
            }}>
                アイディアと技術で、一歩先の驚きと感動を。
            </p>
        </div>
    )
}

const styles = {
    KeyMessage: {
        position: "absolute",
        width: "402.357px",
        top: "25.16%",
        left: "50%",
        transform: "translateX(-50%)",
        fontWeight: "lighter",
        fontSize: "12px",
        color:"#ffffff",
        letterSpacing:"2px"
    }
}

export default KeyMessage;