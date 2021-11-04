import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  ChakraProvider,
  createStandaloneToast,
} from "@chakra-ui/react";

class MetamaskHandler extends Component {
  state = {
    clicked: false,
    isLoggedIn: false,
    isInDesiredChain: false,

    currentText: "Rede Incorreta",
    isLoading: false,
    loadingText: "",
    disabled: false,
    currentAddress: "",
    userToken: null,
    currentAccount: "null",
  };
  msgParams = [
    {
      type: "string",
      name: "Message",
      value: "Sign up your nonce for security reasons!",
    },
    {
      type: "uint32",
      name: "Nonce",
      value: Math.floor(Math.random() * 1000000),
    },
  ];
  chainId = "0x38";

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  injectWeb3 = () => {
    const Web3 = require("web3");
    const web3 = new Web3(window.ethereum);
    return web3;
  };

  isAddress = (address) => {
    if (address) {
      const _address = address.toLowerCase();
      if (!/^(0x)?[0-9a-f]{40}$/i.test(_address)) {
        // check if it has the basic requirements of an address
        return false;
      } else if (
        /^(0x)?[0-9a-f]{40}$/.test(_address) ||
        /^(0x)?[0-9A-F]{40}$/.test(_address)
      ) {
        // If it's all small caps or all all caps, return true
        return true;
      } else {
        // Otherwise check each case
        return false;
      }
    } else {
      console.log("No address informed");
      return false;
    }
  };

  getAccounts = async () => {
    const web3 = this.injectWeb3();
    const accounts = await web3.eth.getAccounts();
    return accounts;
  };

  checkIfLoggedIn = async () => {
    if ((await this.getAccounts()) > 0) {
      return true;
    } else {
      return false;
    }
  };

  signMsg = async (msgParams, from) => {
    const toast = createStandaloneToast();
    const web3 = this.injectWeb3();

    var errMsg = "";
    var teste;
    web3.currentProvider.send(
      {
        method: "eth_signTypedData",
        params: [msgParams, from],
        from: from,
      },
      function (err, result) {
        // if (err) return console.error(err);
        // if (result.error) {
        //   return console.error(result.error.message);
        // }
        // const recovered = sigUtil.recoverTypedSignature({
        //   data: msgParams,
        //   sig: result.result,
        // });
        // if (recovered === from) {
        //   console.log("Recovered signer: " + from);
        // } else {
        //   console.log("Failed to verify signer, got: " + result);
        // }
        if (err) {
          if (err.code === 4001) errMsg = "Usuario declinou a assinatura.";
          else errMsg = err.message;

          toast({
            position: "bottom",
            title: "Ocorreu um erro ao conectar",
            description: `Error: ${errMsg}`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          teste = false;
          console.log(teste);
        } else {
          toast({
            position: "bottom",
            title: "Seja bem vindo!",
            description: `Address: ${from}`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          teste = true;
          console.log(teste);
          //todo: handle accounts changed
        }
        //return result;
      }
    );
    console.log(teste);
    return teste;
  };

  logIn = async () => {
    const toast = createStandaloneToast();
    try {
      this.setLoading(true, "Conectando...");
      const accounts = await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(this.handleAccountsChanged);

      this.setState({ currentAccount: accounts[0] });
      var hasSigned = await this.signMsg(
        this.msgParams,
        this.state.currentAccount
      );
      console.log(hasSigned);
      //   if (hasSigned) {
      //     this.showConnectedAddress(account);
      //   } else {
      //     console.log("didn't signed up");
      //   }
      this.setLoading(false);
    } catch (e) {
      toast({
        position: "bottom",
        title: "Ocorreu um erro ao conectar",
        description: `Error: ${e.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      this.setLoading(false);
    }
    return true;
  };

  setLoading = (_isLoading, _loadingText = "") => {
    if (_isLoading)
      this.setState({
        isLoading: _isLoading,
        loadingText: _loadingText,
        disabled: true,
      });
    else
      this.setState({
        isLoading: _isLoading,
        loadingText: _loadingText,
        disabled: false,
      });
  };

  showConnectedAddress = (address) => {
    this.setState({
      currentText: address.slice(0, 6) + "..." + address.slice(-4),
      isLoading: false,
      loadingText: "",
      disabled: true,
    });
  };

  handleChainChanged = async () => {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    this.chainHasChanged(chainId);
  };

  chainHasChanged = (_chainId) => {
    if (_chainId !== this.chainId) {
      this.setState({
        isLoading: false,
        currentText: "Rede incorreta.",
        disabled: true,
      });
    }
    window.location.reload();
  };

  handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      console.log("Nao conectado ou metamask bloqueada");
    } else {
      this.setState({ currentAccount: accounts[0] });
      this.showConnectedAddress(this.state.currentAccount);
    }
  };

  componentDidMount = async () => {
    window.ethereum.on("chainChanged", this.handleChainChanged);
    window.ethereum.on("accountsChanged", this.handleAccountsChanged);
    this.forceUpdate();
    if (
      window.ethereum.chainId === this.chainId ||
      window.ethereum.chainId === null
    ) {
      // Se estiver conectado na BSC
      if (await this.checkIfLoggedIn()) {
        //Se ja estiver conectado no site
        var accounts = await this.getAccounts();
        this.setState({ currentAccount: accounts[0] });
        var account = this.state.currentAccount;
        this.showConnectedAddress(account);
      } else {
        //Se não tiver conectado, mas tiver na BSC
        this.setState({
          disabled: false,
          isLoading: false,
          currentText: "Conecte com Metamask",
        });
      }
    } else {
      // Se não tiver na BSC
      this.setState({
        disabled: true,
        isLoading: false,
        currentText: "Rede Incorreta",
      });
    }
  };

  render() {
    return (
      <ChakraProvider>
        <Button
          colorScheme="pink"
          variant="ghost"
          onClick={this.logIn}
          loadingText={this.state.loadingText}
          isLoading={this.state.isLoading}
          disabled={this.state.disabled}
        >
          {this.state.currentText}
        </Button>
      </ChakraProvider>
    );
  }
}

export default MetamaskHandler;
