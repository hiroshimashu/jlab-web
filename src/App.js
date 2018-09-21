import React, { Component } from "react";
import Header from "./Components/Header/header";
import KeyVisual from "./Components/KeyVisual/keyVisual";
import News from "./Components/News/news";

class App extends Component {
  render() {
    return (
        <div className= "wrapper">
            <Header />
            <KeyVisual />
            <News />
        </div>
    )
  }
}

export default App;