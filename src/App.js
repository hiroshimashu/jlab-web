import React, { Component } from "react";
import Header from "./Components/Header/header";
import KeyVisual from "./Components/KeyVisual/keyVisual";
import News from "./Components/News/news";
import Product from"./Components/Product/product";

class App extends Component {
  render() {
    return (
        <div className= "wrapper">
            <Header />
            <KeyVisual />
            <News />
            <Product />
        </div>
    )
  }
}

export default App;