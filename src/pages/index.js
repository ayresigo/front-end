import React, { Component } from "react";
import Game from "./game";
import Home from "./home";

class PageHandler extends Component {
  state = {
    hasMetamask: false,
  };

  componentDidMount() {
    if (window.ethereum) this.setState({ hasMetamask: true });
  }

  render() {
    if (this.state.hasMetamask) {
      return <Game />;
    } else {
      return <Home />;
    }
  }
}

export default PageHandler;
