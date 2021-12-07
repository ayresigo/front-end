import { Spacer, Wrap, WrapItem } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import ActionMenu from "../../components/menu_action";
import PlayerMenu from "../../components/menu_player";

function Play({ children }) {
  return (
    <div>
      <Wrap ml="8" mr="8">
        <WrapItem>
          <PlayerMenu />
        </WrapItem>
        <Spacer />
        <WrapItem>{children}</WrapItem>
        <Spacer />
        <WrapItem>
          <ActionMenu />
        </WrapItem>
      </Wrap>
    </div>
  );
}

export default Play;
