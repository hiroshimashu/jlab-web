import React, { Component } from "react";
import Rectangle from "./backgroundRectanlge";
import SectionTitle from "../Common/sectionTitle";
import Info from "./info";
import GoogleMap from "./googleMap";
import ToRecruit from "./toRecruit";
import FacebookLogo from "./facebook_logo";

class Contact extends Component {
  render() {
      return (
          <section className="contact-wrapper" style={{
              position: "relative",
              width: "843.043px",
              height: "1125.859px",
              marginLeft: "calc((100% - 843.043px) / 2)"
          }}>
              <Rectangle />
              <SectionTitle
                  title="Contact"
                  top="248.505px"
                  left="370.816px"
                  Ref={ this.props.contactRef }
              />
              <Info />
              <GoogleMap />
              <ToRecruit />
              <FacebookLogo />
          </section>
      )
  }
}

export default Contact;