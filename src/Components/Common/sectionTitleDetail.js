import React from "react";

const SectionTitleDetail = (props) => {
    return (
        <div className = "section-title" style = {{...styles.SectionTitle, top: `${props.top}`, letterSpacing:`${props.space}`}}>
            {props.title}
        </div>
    )
}

const styles = {
    SectionTitle: {
        position: "absolute",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "24px",
        color: "#74CEE2",
        left: "51%",
        transform: "translateX(-50%)",
        textAlign: "center"
    }
}


export default SectionTitleDetail;