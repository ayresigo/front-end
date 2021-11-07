import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Center, Divider, Wrap, WrapItem } from "@chakra-ui/layout";

import React from "react";
import { Component } from "react";
import Character from "../character-status";
import Session from "../session";
import * as S from "./styled";

class PlayerPofile extends Component {
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

  updateUserData = async () => {
    const user = await new Session().getUserData();
    console.log(user);
    const userData = user;
    console.log(userData.username);
    userData.username = user.data.username;
    userData.address = user.data.address;
    userData.avatar = user.data.avatar;
    userData.money = user.data.money;
    userData.respect = user.data.respect;
    userData.totalpower = user.data.totalpower;

    await this.setState({ user: userData });
  };

  componentDidMount = () => {
    // this.setState({ isLoaded: true });
    //  this.updateUserData();
  };

  render = () => {
    return (
      <S.MainWrapper>
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
