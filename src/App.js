import React, { Component } from "react";
import Header from "./Components/Header/header";
import KeyVisual from "./Components/KeyVisual/keyVisual";
import News from "./Components/News/news";
import Product from"./Components/Product/product";
import Solution from  "./Components/Solution/solution";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Common/footer";

class App extends Component {
  render() {
    return (
        <div className= "wrapper">
            <Header />
            <KeyVisual />
            <News />
            <Product />
            <Solution />
            <Contact />
            <Footer />
        </div>
    )
  }
}

export default App;