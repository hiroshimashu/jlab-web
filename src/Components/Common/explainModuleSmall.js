import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const ExplainModuleSmall = (props) => {
    return (
      <Fade bottom>
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
            <Link to = {props.to || "/#"}>
              <button className="button-small">
                Click here to read more
              </button>
            </Link>
        </div>
      </Fade>
    )
}

export default ExplainModuleSmall;