import React from "react";
import CurrentTime from "../current_time";
import Metamask from "./metamask_login";
import useTime from "../../../hooks/time-hook";
import * as S from "./styled";

const NavBar = () => {
  const { currentTime, fetchTime } = useTime();
  return (
    <S.MainDiv>
      <S.CryminalsTitle>Cryminals</S.CryminalsTitle>
      <CurrentTime />
      <Metamask />
    </S.MainDiv>
  );
};

export default NavBar;
