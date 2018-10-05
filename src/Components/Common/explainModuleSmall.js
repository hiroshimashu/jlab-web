import React from "react";

const ExplainModuleSmall = (props) => {
    return (
        <div className="explain-wrapper-small" id = { props.id }>
            <div className = { props.imgWrapperClassName }>
                <img src = { props.src } className = { props.imgClassName} />
            </div>
            <p className = { props.explainTitle }>
                { props.moduleTitle }
            </p>
            <p className= { props.explainMain }>
                { props.explain }
            </p>
            <button className="button-small">
                Click here to read more
            </button>

        </div>
    )
}

export default ExplainModuleSmall;