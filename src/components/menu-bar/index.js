import { Button } from "@chakra-ui/button";
import { Divider } from "@chakra-ui/layout";
import React from "react";
import * as S from "./styled";

function MenuBar() {
  return (
    <div>
      <S.MenuWrapper>
        <h1>Menu</h1>
        <Divider />
        <Button variant="ghost" width="100%">
          Atacar
        </Button>
        <Button variant="ghost" width="100%">
          Roubar
        </Button>
        <Button variant="ghost" width="100%">
          Recrutar
        </Button>
        <Button variant="ghost" width="100%">
          Esconderijo
        </Button>
      </S.MenuWrapper>
    </div>
  );
}

export default MenuBar;
