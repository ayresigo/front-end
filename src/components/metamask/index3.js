import { Button, createStandaloneToast } from "@chakra-ui/react";
import React from "react";
import { ethers } from "ethers";
import { Component } from "react";
import * as MdIcon from "react-icons/md";
import api from "../../services/api";

class Metamask extends Component {
  _api = new api();
  provider = null;
  toast = createStandaloneToast();
  state = {
    hasMetamask: false,
    isLoggedIn: false,
    isInRightChain: false,
    isLoading: false,
    isSigned: false,
    disabled: false,

    address: "",
    buttonText: "Conectar com Metamask",
    loadingText: "",

    leftIcon: <MdIcon.MdOutlineAddLink />,
  };

  isConnected = async () => {
    const accounts = await this.provider.listAccounts();
    this.setState({ address: accounts[0] });
    return accounts.length > 0;
  };

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
      const isValid = await this.checkLogin(sign);
      if (isValid) {
        this.setState({
          isLoading: false,
          disabled: true,
          buttonText:
            this.state.address.slice(0, 6) +
            "..." +
            this.state.address.slice(-4),
          leftIcon: <MdIcon.MdOutlineLink />,
        });

        this.toast({
          position: "bottom",
          title: "Seja bem vindo!!",
          description: "Assinatura verificada com sucesso!!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (err) {
      this.setState({
        isLoading: false,
        disabled: false,
      });

      this.toast({
        position: "bottom",
        title: "Ocorreu um erro ao conectar",
        description: `Error: ${err.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  signMessage = async (signer) => {
    const message = String(Math.floor(Math.random() * 1000000));

    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();
    this.setState({ address: address, isSigned: true });
    return {
      message,
      signature,
      address,
    };
  };

  checkLogin = async (sign) => {
    // const result = await axios({
    //   url: "https://localhost:44335/api/v1/Login/checksign",
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: {
    //     address: sign.address,
    //     message: sign.message,
    //     signature: sign.signature,
    //   },
    // });

    const result = await this._api.checkSignature(sign, true);

    if (result.status === 200) {
      const token_result = await this._api.generateToken(sign, true);
      
      if (token_result.status === 200) {
        localStorage.setItem("token", token_result.data.token);
      }
      // new Session().getAccountData(sign.address);
      return true;
    } else return false;
  };

  componentDidMount = async () => {
    // //mexe aqui
    // if (!window.ethereum) this.setState({ hasMetamask: false });
    // else {
    //   this.setState({ hasMetamask: true });
    //   this.provider = new ethers.providers.Web3Provider(window.ethereum);
    //   if (await this.isConnected()) {
    //     this.setState({
    //       isLoading: false,
    //       disabled: false,
    //       buttonText:
    //         this.state.address.slice(0, 6) +
    //         "..." +
    //         this.state.address.slice(-4),
    //       leftIcon: <MdIcon.MdOutlineLink />,
    //     });
    //   }

    //   // await new Session().setIsLoggedIn();
    // }

    if (!window.ethereum) this.setState({ hasMetamask: false });
    else {
      this.setState({ hasMetamask: true });
      this.provider = new ethers.providers.Web3Provider(window.ethereum);

      const token = localStorage.getItem("token");
      if (token) {
        // tem cookie
        // check token
        var res = this._api.checkToken(token, true);
        if (await this.isConnected()) {
          // está conectado
          if (await this.isConnected()) {
            this.setState({
              isLoading: false,
              disabled: false,
              buttonText:
                this.state.address.slice(0, 6) +
                "..." +
                this.state.address.slice(-4),
              leftIcon: <MdIcon.MdOutlineLink />,
            });
          }
        } else {
          localStorage.removeItem("token");
        }
      } else {
        // não tem cookie
      }
    }
  };

  render = () => {
    if (this.state.hasMetamask) {
      return (
        <Button
          colorScheme="pink"
          variant="ghost"
          onClick={this.login}
          loadingText={this.state.loadingText}
          isLoading={this.state.isLoading}
          disabled={this.state.disabled}
          leftIcon={this.state.leftIcon}
        >
          {this.state.buttonText}
        </Button>
      );
    } else {
      return null;
    }
  };
}

export default Metamask;
