import React, { Component } from 'react';
import Logo from "./logo";
import Menu from "./menu";

class header extends Component {
  constructor(props) {
      super(props);
  }
  componentDidMount() {
      this.props.handleResize();
      console.log(this.props);
  }

  render() {
      return (
          <section className="header" style={{height: "0px",  cursor: "pointer"}}>
              <Logo />
              <Menu
                  company={ this.props.company }
                  product = { this.props.product }
                  solution = { this.props.solution }
                  contact = { this.props.contact }
              />
          </section>
      )
  }
}

export default header;