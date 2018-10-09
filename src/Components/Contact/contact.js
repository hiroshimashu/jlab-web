import React, { Component } from "react";
import Rectangle from "./backgroundRectanlge";
import SectionTitle from "../Common/sectionTitle";
import SectionTitleSmall from "../Common/sectionTitleSmall";
import Info from "./info";
import GoogleMap from "./googleMap";
import ToRecruit from "./toRecruit";
import FacebookLogo from "./facebook_logo";

class Contact extends Component {
  render() {
      return (
        <div>
          <section className="contact-wrapper" style = {{ position: "relative"}}>
              <Rectangle />
              <SectionTitle
                  title="Contact"
                  top="248.505px"
                  left="370.816px"
                  Ref={ this.props.contactRef }
              />
              <SectionTitleSmall
                  title = "Contact"
                  id = "contact-title"
                  Ref={ this.props.contactRef }
              />
              <Info />
              <GoogleMap />
              <ToRecruit />
              <FacebookLogo />
          </section>
        </div>
      )
  }
}

export default Contact;