import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Center, Divider, Wrap, WrapItem } from "@chakra-ui/layout";
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
    } catch (err) {}
  };

  render = () => {
    var isOpen = false;

    if (this.state.user.username === "null") {
      console.log(this.state.user.username);
      isOpen = true;
    }

    return (
      <S.MainWrapper>
        <Modal isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Oie</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
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
      </S.MainWrapper>
    );
  };
}

export default PlayerPofile;
