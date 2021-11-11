import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/react";
import React from "react";
import { Component } from "react";
import MenuBar from "../menu-bar";
import PlayerPofile from "../player-profile";

class Game extends Component {
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

export default Game;