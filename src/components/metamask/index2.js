import React, { Component } from "react";
import { Button, createStandaloneToast } from "@chakra-ui/react";
import api from "../../services/api";
import { ethers } from "ethers";

class Metamask extends Component {
  _api = new api();
  provider = null;
  toast = createStandaloneToast();

  state = {
    provider: false,

    // button props
    text: "",
    loadingText: "",
    disabled: false,
  };

  componentDidMount() {
    // pre render
    if (!window.ethereum)
      // checa se possui metamask instalada
      this.setState({ provider: false, text: "Instale a Metamask" });
    else {
      this.setState({ provider: true, text: "Conectar Wallet" });
      this.provider = new ethers.providers.Web3Provider(window.ethereum); // instancia o ethers
      
    }
  }

  render() {
    return <div></div>;
  }
}

export default Metamask;
