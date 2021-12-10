import { Spacer, Wrap, WrapItem } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import ActionMenu from "../../components/menu_action";
import PlayerMenu from "../../components/menu_player";

function Play({ children }) {
  return (
    <div>
      <PlayerMenu />
      <Wrap marginLeft="320px" mr="8">
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
