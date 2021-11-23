import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import {
  Input,
  InputGroup,
  InputAddon,
  InputLeftAddon,
  InputRightAddon,
  InputElement,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { Center, Divider, Wrap, WrapItem } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";

import React from "react";
import { Component } from "react";
import api from "../../services/api";
import Character from "../character-status";
import Session from "../session";
import * as S from "./styled";

class PlayerPofile extends Component {
  _api = new api();

  state = {
    user: {
      username: "username",
      address: "",
      avatar: null,
      money: 0,
      respect: 0,
      totalpower: 0,
    },
    myGang: [],

    isLoaded: false,

    modalValue: "",
    modalIsOpen: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    try {
      this._api.editUsername(this.state.user.address, this.state.modalValue);
      this.setState({ modalIsOpen: false });
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  showModal = (show = true) => {
    this.setState({ modalIsOpen: show });
  };

  componentDidMount = async () => {
    const token = localStorage.getItem("token");
    try {
      var tokenResponse = await this._api.checkToken(token);
      var user = await this._api.getAccount(tokenResponse.data.address);
      var userInfo = user.data;

      this.setState({
        user: {
          username: userInfo.username,
          address: userInfo.address,
          avatar: userInfo.avatar,
          money: userInfo.money,
          respect: userInfo.respect,
          totalpower: userInfo.totalPower,
        },
      });

      if (this.state.user.username === "null") {
        this.showModal();
      }
    } catch (err) {}
  };

  render = () => {
    return (
      <S.MainWrapper>
        <Modal isOpen={this.state.modalIsOpen}>
          <ModalOverlay />
          <ModalContent>
            <form onSubmit={this.handleSubmit}>
              <ModalHeader>Escolher nome de exibição</ModalHeader>
              {/* <ModalCloseButton /> */}
              <ModalBody>
                Olá, Seja Bem vindo!
                <br />
                Para começar a jogar, você precisa escolher um novo nome de
                exibição!
                <br />
                <br />
                <Input
                  textAlign="center"
                  onChange={(e) =>
                    this.setState({ modalValue: e.target.value })
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" type="submit">
                  Confirmar
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
        <Avatar size="2xl" src={this.state.user.avatar}>
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <S.ProfileWrapper>
          <S.SocialInfoWrapper>
            <h1>{this.state.user.username}</h1>
            <h2>
              {this.state.user.address.slice(0, 6) +
                "..." +
                this.state.user.address.slice(-4)}
            </h2>
          </S.SocialInfoWrapper>
          <Divider />
          <S.StatusWrapper>
            <li>
              <h2>Money</h2>
              <Divider />
              <h1>{this.state.user.money}</h1>
            </li>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <li>
              <h2>Respect</h2>
              <Divider />
              <h1>{this.state.user.respect}</h1>
            </li>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <li>
              <h2>TotalPower</h2>
              <Divider />
              <h1>{this.state.user.totalpower}</h1>
            </li>
          </S.StatusWrapper>
        </S.ProfileWrapper>
        <Divider />
        My Gang
        <Wrap justify="center">
          <WrapItem p="2">
            <Character />
          </WrapItem>
          <WrapItem p="2">
            <Character />
          </WrapItem>
          <WrapItem p="2">
            <Character />
          </WrapItem>
          <WrapItem p="2">
            <Character />
          </WrapItem>
          <WrapItem p="2">
            <Character />
          </WrapItem>
          <WrapItem p="2">
            <Character />
          </WrapItem>
          <WrapItem p="2">
            <Character />
          </WrapItem>
        </Wrap>
        <Link to="/recruit">Recrutar</Link>
      </S.MainWrapper>
    );
  };
}

export default PlayerPofile;
