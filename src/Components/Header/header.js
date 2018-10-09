import React, { Component } from 'react';
import Logo from "./logo";
import Menu from "./menu";
import MenuButton from "../MenuButton";

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
          <section className="header" style={{ cursor: "pointer" }}>
              <Logo />
              <Menu
                  company={ this.props.company }
                  product = { this.props.product }
                  solution = { this.props.solution }
                  contact = { this.props.contact }
              />
              <MenuButton
                  handleClick = { this.props.handleClick }
                  company={ this.props.company }
                  product = { this.props.product }
                  solution = { this.props.solution }
                  contact = { this.props.contact }
                  open = { this.props.open }
              />
          </section>
      )
  }
}

export default header;