import { Spacer, Wrap, WrapItem } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import Canvas from "../../components/canvas";
import ActionMenu from "../../components/menu_action";
import PlayerMenu from "../../components/menu_player";

function Play({ children }) {
  return (
    <div>
      <Wrap>
        <WrapItem>
          <PlayerMenu />
        </WrapItem>
        <Spacer />
        <WrapItem>
          <Canvas>{children}</Canvas>
        </WrapItem>
        <Spacer />
        <WrapItem>
          <ActionMenu />
        </WrapItem>
      </Wrap>
    </div>
  );
}

export default Play;
