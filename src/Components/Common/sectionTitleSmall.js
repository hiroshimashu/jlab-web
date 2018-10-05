import React from "react";

const SectionTitleSmall = (props) => {
    return (
        <div className="section-title-small" id = {`${props.id}`}>
            <p>
                { props.title }
            </p>
        </div>
    )
}

export default SectionTitleSmall;