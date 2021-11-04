import React, { useState } from "react";
import { Button, ChakraProvider, useToast } from "@chakra-ui/react";

function MetamaskHandler() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isInDesiredChain, setIsInDesiredChain] = useState();
  const [isLoading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState();
  const sigUtil = require("eth-sig-util");
  const injectWeb3 = () => {
    const Web3 = require("web3");
    const web3 = new Web3(window.ethereum);
    return web3;
  };

  const web3 = injectWeb3();
  const msgParams = [
    {
      type: "string", // Any valid solidity type
      name: "Message", // Any string label you want
      value: "Sign up your nonce for security reasons!", // The value to sign
    },
    {
      type: "uint32",
      name: "Nonce",
      value: Math.floor(Math.random() * 1000000),
    },
  ];

  var isAddress = function (address) {
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

  async function getAccounts() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts.length);
    return accounts;
  }

  async function checkIfLoggedIn() {
    if ((await getAccounts()) > 0) {
      console.log("User logged in!");
      return true;
    } else {
      console.log("User not logged in");
      return false;
    }
  }

  async function logIn() {
    try {
      setLoading(true);
      setLoadingText("Conectando...");
    } catch {
    } finally {
    }
  }

  return (
    <ChakraProvider>
      <Button
        colorScheme="pink"
        variant="solid"
        onClick={logIn}
        isLoading={isLoading}
        loadingText={loadingText}
      >
        {(() => {
          if (isLoggedIn && isInDesiredChain) {
            return <>Conectado!</>;
          } else if (isLoggedIn && !isInDesiredChain) {
            return <>Rede errada!</>;
          } else {
            return <>Conectar com Metamask</>;
          }
        })()}
      </Button>
    </ChakraProvider>
  );
}

export default MetamaskHandler;
