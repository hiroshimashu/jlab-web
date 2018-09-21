import React from "react"

const KeyMessage = () => {
    return (
        <div className = "key-meassage" style = {styles.KeyMessage}>
            アイディアと技術で、一歩先の驚きと感動を。
        </div>
    )
}

const styles = {
    KeyMessage: {
        position: "absolute",
        top: "57.19%",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "12px",
        color:"#ffffff",
        letterSpacing:"0.5em"
    }
}

export default KeyMessage;