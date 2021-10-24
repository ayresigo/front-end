import React, { useState } from "react";
import * as S from "./styled";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup, useToast } from "@chakra-ui/react";
import Web3 from "web3";

export let web3;
export let currentUser;

const Metamask = () => {
  const [isLoading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState();
  const [isSignedIn, setIsSignedIn] = useState();
  const [isInDesiredChain, setIsInDesiredChain] = useState();
  const toast = useToast();

  handleChainChanged();
  handleAccountsChanged();

  function handleAccountsChanged(accounts) {
    window.ethereum.on("accountsChanged", (accounts) => {
      // Handle the new accounts, or lack thereof.
      // "accounts" will always be an array, but it can be empty.
      if (accounts[0] === undefined) {
        window.ethereum.removeListener("accountsChanged", LogIn);
      } else {
        
      }
    });
  }

  function handleChainChanged() {
    window.ethereum.on("chainChanged", (chainId) => {
      // Handle the new chain.
      // Correctly handling chain changes can be complicated.
      // We recommend reloading the page unless you have good reason not to.
      window.location.reload();
    });
  }

  async function LogIn() {
    try {
      setLoading(true);

      setLoadingText("Conectando...");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      var account = accounts[0];
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      setIsSignedIn(true);

      toast({
        position: "bottom",
        title: "Seja bem vindo!",
        description: `Address: ${account}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      if (window.ethereum.chainId === "0x38") setIsInDesiredChain(true);
      else setIsInDesiredChain(false);
    } catch (e) {
      toast({
        position: "bottom",
        title: "Ocorreu um erro ao conectar",
        description: `${e.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
      setLoadingText();
    }
  }

  return (
    <ChakraProvider>
      <Button
        colorScheme="pink"
        variant="solid"
        onClick={LogIn}
        isLoading={isLoading}
        loadingText={loadingText}
      >
        {(() => {
          if (isSignedIn && isInDesiredChain) {
            console.log(isInDesiredChain + ", " + isSignedIn);
            return <>Conectado!</>;
          } else if (isSignedIn && !isInDesiredChain) {
            console.log(isInDesiredChain + ", " + isSignedIn);
            return <>Rede errada!</>;
          } else {
            console.log(isInDesiredChain + ", " + isSignedIn);
            return <>Conectar com Metamask</>;
          }
        })()}
      </Button>
    </ChakraProvider>
  );
};

export default Metamask;
