import React from "react";

const SectionTitle = (props) => {
    return (
        <div className = "section-title" style = {{...styles.SectionTitle, top: `${props.top}` }}>
            {props.title}
        </div>
    )
}

const styles = {
    SectionTitle: {
        position: "absolute",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "31px",
        color: "#74CEE2",
        left: "50%",
        letterSpacing:"3.19pt",
        transform: "translateX(-50%)"
    }
}

export default SectionTitle;