import { add } from "lodash";
import React, { useState } from "react";
import sha3 from "sha3";

function MetamaskTest() {
  const [accounts, setAccounts] = useState("initial");

  var isAddress = function (address) {
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
  };

  const setUserNonce = (account) => {
    if (isAddress(account)) {
      const user = {
        nonce: Math.floor(Math.random() * 1000000),
        publicAddress: account,
      };
      console.log(user.nonce);
      return user;
    }

    console.log("Invalid address");
    return null;
  };

  async function web3Inject() {
    const Web3 = require("web3");
    // web3 lib instance
    const web3 = new Web3(window.ethereum);
    // get all accounts
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts);
    console.log(accounts[0]);
    console.log(isAddress(accounts[0]));
    setUserNonce(accounts[0]);
  }

  return <button onClick={web3Inject}>{accounts[0]}</button>;
}

export default MetamaskTest;
