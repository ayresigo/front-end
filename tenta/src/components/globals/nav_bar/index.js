import React from "react";
import CurrentTime from "../current_time";
import Metamask from "./metamask_login";
import * as S from "./styled";

const NavBar = () => {
  return (
    <S.MainDiv>
      Cryminals
      <CurrentTime />
      <Metamask />
    </S.MainDiv>
  );
};

export default NavBar;
