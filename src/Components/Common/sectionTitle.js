import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class SectionTitle extends Component {

  componentDidMount() {
      console.log(this.props.Ref);
  }
  render() {
      return (
          <Fade bottom>
              <div className="section-title"
                   style={{...styles.SectionTitle, top: `${this.props.top}`, left: `${this.props.left}`}}
                   ref = { this.props.Ref }
              >
                  {this.props.title}
              </div>
          </Fade>
      )
  }
}

const styles = {
    SectionTitle: {
        position: "absolute",
        fontFamily: "Helvetica Neue, Arial",
        fontWeight: "lighter",
        fontSize: "31px",
        color: "#74CEE2",
        letterSpacing: "3.19pt",
    }
}


export default SectionTitle;