import React, { Component } from "react";
import KeyVisual from "./Components/KeyVisual/keyVisual";
import GoTop from "./Components/Common/goTop";
import News from "./Components/News/news";
import Product from"./Components/Product/product";
import Solution from  "./Components/Solution/solution";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Common/footer";


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isScrolled: false
      }
      this.node = React.createRef();
  }

  componentDidMount() {
      window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
  }

  componentWillUnmount() {
        window.removeEventListener('scroll', event => this.watchCurrentPosition())
  }

  watchCurrentPosition() {
      const position =  this.scrollTop();
      if (position > 500) {
          this.setState(() => {
              return (
                  {isScrolled: true}
              )
          })
      } else {
          this.setState(() => {
              return (
                  {isScrolled: false}
              )
          })
      }
  }

  scrollTop() {
        return Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop);
  }

  goTop = () => {
      window.scrollTo(0, 0);
      //document.body.scrollTop = 0; // For Safari
      //document.documentElement.scrollTop = 0;
  }




    render() {
    return (
        <div className= "wrapper" ref = { this.node }>
            { this.state.isScrolled &&  <GoTop handleClick = { this.goTop } />}
            <KeyVisual />
            <News
                companyRef = { this.props.companyRef }
            />
            <Product
                productRef = { this.props.productRef }
            />
            <Solution
                solutionRef = { this.props.solutionRef }
            />
            <Contact
                contactRef = { this.props.contactRef }
            />
            <Footer
                height = "301.76px"
                top = "215.473px"
            />
        </div>
    )
  }
}

export default App;