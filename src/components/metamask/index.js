import React, { Component } from "react";
import { Button, createStandaloneToast } from "@chakra-ui/react";
import api from "../../services/api";
import * as MdIcon from "react-icons/md";
import { ethers } from "ethers";
import { Navigate } from "react-router-dom";
class Metamask extends Component {
  _api = new api();
  provider = null;
  toast = createStandaloneToast();

  state = {
    provider: false,

    // button props
    text: "",
    loadingText: "Conectando",
    isLoading: false,
    disabled: false,
    leftIcon: <MdIcon.MdOutlineAddLink />,
  };

  componentDidMount = async () => {
    // pre render
    if (window.ethereum) {
      this.setState({ provider: true, text: "Conectar Wallet" });
      this.provider = new ethers.providers.Web3Provider(window.ethereum); // instancia o ethers
      const token = localStorage.getItem("token");
      if (await this.isConnected()) {
        if (token) {
          try {
            var checkTokenRes = await this._api.checkToken(token);
            this.showConnectedButton(checkTokenRes.data.address);
          } catch (err) {
            localStorage.removeItem("token");
            this.reload();
          }
        }
      } else {
        // se não tiver conectado, apaga o token, se tiver
        localStorage.removeItem("token");
      }
    } else {
      this.setState({ provider: false, text: "Baixar Metamask" });
    }
  };

  render() {
    return (
      <Button
        colorScheme="pink"
        variant="ghost"
        onClick={() => {
          if (this.state.provider) return this.login();
          else return this.downloadMetamask();
        }}
        loadingText={this.state.loadingText}
        isLoading={this.state.isLoading}
        disabled={this.state.disabled}
        leftIcon={this.state.leftIcon}
      >
        {this.state.text}
      </Button>
    );
  }

  login = async () => {
    this.setState({
      isLoading: true,
      loadingText: "Conectando...",
      disabled: true,
    });
    try {
      await window.ethereum.send("eth_requestAccounts");
      const signer = this.provider.getSigner();
      const sign = await this.signMessage(signer);
      await this._api.checkSignature(sign);
      this.showConnectedButton(await signer.getAddress());
      this.makeToast(
        "Bem vindo!",
        "Autenticação validada com sucesso!",
        "success"
      );
      // ficou feio, mas é o melhor que ta tendo
      localStorage.setItem(
        "token",
        await (
          await this._api.generateToken(sign)
        ).data.token
      );
      return (<Navigate to="/play" />);
    } catch (err) {
      this.setState({ isLoading: false, disabled: false });
      this.makeToast("Erro! :(", err.message, "error");
    }
  };

  signMessage = async (signer) => {
    const message = String(Math.floor(Math.random() * 1000000));
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();
    // this.setState({ address: address, isSigned: true });
    return {
      message,
      signature,
      address,
    };
  };

  downloadMetamask = () => {
    console.log("downloadMetamask");
  };

  makeToast(
    title,
    description,
    status,
    duration = 9000,
    isClosable = true,
    position = "bottom"
  ) {
    this.toast({
      position: position,
      title: title,
      description: description,
      status: status,
      duration: duration,
      isClosable: isClosable,
    });
  }

  showConnectedButton = (address) => {
    this.setState({
      isLoading: false,
      disabled: true,
      text: address.slice(0, 6) + "..." + address.slice(-4),
      leftIcon: <MdIcon.MdOutlineLink />,
    });
  };

  isConnected = async () => {
    const accounts = await this.provider.listAccounts();
    return accounts.length > 0;
  };

  reload() {
    window.location.reload();
  }
}
export default Metamask;
