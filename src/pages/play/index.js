import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/react";
import React from "react";
import { Component } from "react";
import MenuBar from "../../components/menu-bar";
import PlayerPofile from "../../components/player-profile";

class Play extends Component {
  render() {
    return (
      <Wrap ml="8" mr="8">
        <WrapItem>
          <PlayerPofile />
        </WrapItem>
        <Spacer />
        <WrapItem>Action</WrapItem>
        <Spacer />
        <WrapItem>
          <MenuBar />
        </WrapItem>
      </Wrap>
    );
  }
}

export default Play;
