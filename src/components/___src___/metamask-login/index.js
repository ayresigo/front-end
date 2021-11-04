import React from "react";
import * as S from "./styled";
import Metamask from "../../images/metamask_icon.png";
import Alert from "react-bootstrap/Alert";

async function LogIn() {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var account = accounts[0];
    console.log("Account: " + account);
    return <Alert variant="success">Account: {account}</Alert>;
  } catch (e) {
    console.log(e.message);
    return <Alert variant="danger">{e.message}</Alert>;
  }
}

const MetamaskLogin = () => {
  var isMetaMask;
  if (window.ethereum && window.ethereum.isMetaMask) {
    isMetaMask = true;
  } else {
    isMetaMask = false;
  }

  window.ethereum.on("chainChanged", () => {
    document.location.reload();
  });

  return (
    <>
      {isMetaMask ? (
        <S.ButtonWrapper onClick={LogIn}>
          Entrar
          <S.MetamaskLogoWrapper src={Metamask} />
        </S.ButtonWrapper>
      ) : (
        <S.ButtonWrapper>
          Baixar o Metamask
          <S.MetamaskLogoWrapper src={Metamask} />
        </S.ButtonWrapper>
      )}
    </>
  );
};

export default MetamaskLogin;
