import { Button } from "@chakra-ui/button";
import { createStandaloneToast } from "@chakra-ui/toast";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { MdLogin, MdOutlineAddLink, MdOutlineLink } from "react-icons/md";
import { Navigate } from "react-router";
import api from "../../../../services/api";

const Metamask = () => {
  const _api = new api();
  const [async, setAsync] = useState(true);
  const [buttonProps, setButtonProps] = useState({
    haveProvider: false,
    buttonText: "Conectar com Metamask",
    loadingText: "Conectando",
    isLoading: false,
    disabled: false,
    leftIcon: <MdOutlineAddLink />,
  });
  const toast = createStandaloneToast();

  const [provider, setProvider] = useState(null);

  useEffect(() => {
    setProvider(new ethers.providers.Web3Provider(window.ethereum));
  }, []);

  useEffect(() => {
    const componentDidMount = async () => {
      if (window.ethereum) {
        if (provider != null) {
          setButtonProps({ ...buttonProps, haveProvider: true });
          try {
            const token = localStorage.getItem("token");
            if ((await provider.listAccounts()) > 0) {
              if (token) {
                var tokenData = await (await _api.getTokenData(token)).data;
                setButtonProps({
                  ...buttonProps,
                  isLoading: false,
                  disabled: true,
                  buttonText:
                    tokenData.address.slice(0, 6) +
                    "..." +
                    tokenData.address.slice(-4),
                  leftIcon: <MdOutlineLink />,
                });
              }
            } else {
              localStorage.removeItem("token");
              throw new Error("Failed to fetch account.");
            }
          } catch (err) {
            localStorage.removeItem("token");
            toast({
              position: "bottom",
              title: "Erro :(",
              description: err.message,
              status: "error",
            });
          }
        }
      } else
        setButtonProps({
          ...buttonProps,
          haveProvider: false,
          buttonText: "No Web3 Provider",
        });
    };
    componentDidMount();
  }, [provider]);

  const signMessage = async (signer) => {
    const message = String(Math.floor(Math.random() * 1000000));
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();
    return {
      message,
      signature,
      address,
    };
  };

  const downloadMetamask = () => {
    console.log("Download Metamask");
  };

  const login = async () => {
    setButtonProps({
      ...buttonProps,
      isLoading: true,
      loadingText: "Conectando...",
    });

    try {
      await window.ethereum.send("eth_requestAccounts");
      const signer = provider.getSigner();
      const sign = await signMessage(signer);
      localStorage.setItem(
        "token",
        await (
          await _api.generateToken(sign)
        ).data
      );
      toast({
        position: "bottom",
        title: "Logged in!",
        status: "success",
      });
      setButtonProps({
        ...buttonProps,
        isLoading: false,
        disabled: true,
        buttonText: sign.address.slice(0, 6) + "..." + sign.address.slice(-4),
        leftIcon: <MdOutlineLink />,
      });
      return <Navigate to="/play" />;
    } catch (err) {
      toast({
        position: "bottom",
        title: "Erro :(",
        description: err.message,
        status: "error",
      });
      setButtonProps({ ...buttonProps, isLoading: false });
    }
  };

  return (
    <Button
      variant="ghost"
      loadingText={buttonProps.loadingText}
      isLoading={buttonProps.isLoading}
      disabled={buttonProps.disabled}
      leftIcon={buttonProps.leftIcon}
      onClick={() => {
        if (provider) return login();
        else return downloadMetamask();
      }}
    >
      {buttonProps.buttonText}
    </Button>
  );
};

export default Metamask;
