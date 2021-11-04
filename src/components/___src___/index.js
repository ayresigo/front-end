import React, { useState } from "react";

function MetamaskTest() {
  const [accounts, setAccounts] = useState("initial");

  const injectWeb3 = () => {
    const Web3 = require("web3");
    // web3 lib instance
    const web3 = new Web3(window.ethereum);
    return web3;
  };

  const web3 = injectWeb3();

  // A JS library for recovering signatures:
  const sigUtil = require("eth-sig-util");

  // Get the current account:
  // web3.eth.getAccounts(function (err, accounts) {
  //   if (!accounts) return;
  //   signMsg(msgParams, accounts[0]);
  // });

  function signMsg(msgParams, from) {
    web3.currentProvider.sendAsync(
      {
        method: "eth_signTypedData",
        params: [msgParams, from],
        from: from,
      },
      function (err, result) {
        if (err) return console.error(err);
        if (result.error) {
          return console.error(result.error.message);
        }
        const recovered = sigUtil.recoverTypedSignature({
          data: msgParams,
          sig: result.result,
        });
        if (recovered === from) {
          alert("Recovered signer: " + from);
        } else {
          alert("Failed to verify signer, got: " + result);
        }
      }
    );
  }

  console.log(web3);

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

  const setUserNonce = (account) => {
    console.log("Setting user (" + account + ") nonce...");
    if (isAddress(account)) {
      const user = {
        nonce: Math.floor(Math.random() * 1000000),
        publicAddress: account,
      };

      console.log("Nonce successfully generated: " + user.nonce);
      signMsg(msgParams, getAccounts[0]);
      return user;
    }

    console.log("Invalid address");
    return null;
  };

  async function getAccounts() {
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts);
    console.log("Accounts: " + accounts);
    setUserNonce(accounts[0]);
    return accounts;
  }

  const msgParams = [
    {
      type: "string", // Any valid solidity type
      name: "Message", // Any string label you want
      value: "Hi, Alice!", // The value to sign
    },
    {
      type: "uint32",
      name: "A number",
      value: setUserNonce(getAccounts[0]).nonce,
    },
  ];
  return <button onClick={getAccounts}>{accounts[0]}</button>;
}

export default MetamaskTest;
