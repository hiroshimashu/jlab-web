import React from "react";
import JlabLogo from "../../static/jlab_logo.png";
import downArrow from "../../static/DownArrow.svg";

const KeyMessage = () => {
    return (
        <div className = "key-message" style = {styles.KeyMessage}>
            <img src = { JlabLogo } alt = "jlab-logo" className="jlab-logo" style = {{
                position: "absolute",
                width: "100%"
            }}/>
            <p  className="message" style = {{
                position: "absolute",
                left: "76.71px",
                top: "180.777px"
            }}>
                アイディアと技術で、一歩先の驚きと感動を。
            </p>
            <div className="message-small-wrapper">
                <p className="message-small1">
                    アイディアと技術で、
                </p>
                <p className="message-small2">
                    一歩先の驚きと感動を。
                </p>
            </div>
            <div className="down-arrow">
                <img
                    src = { downArrow }
                    style = {{ height: "100%", width:"100%"}}
                />
            </div>
        </div>
    )
}

const styles = {
    KeyMessage: {
        fontWeight: "lighter",
        fontSize: "16px",
        color:"#ffffff",
        letterSpacing:"2px"
    }
}

export default KeyMessage;