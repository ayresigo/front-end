import React from "react";
import CurrentTime from "../current_time";
import Metamask from "./metamask_login";
import * as S from "./styled";

const NavBar = () => {
  return (
    <S.MainDiv>
      <S.CryminalsTitle>Cryminals</S.CryminalsTitle>
      <CurrentTime className="currentTime" />
      <Metamask />
    </S.MainDiv>
  );
};

export default NavBar;
