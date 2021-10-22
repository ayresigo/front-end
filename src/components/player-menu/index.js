import React from "react";
import PlayerCard from "../player-card";
import * as S from "./styled";

function PlayerMenu() {
  return (
    <S.PlayerMenuWrapper>
      <PlayerCard />
      Inventory
      Shop
    </S.PlayerMenuWrapper>
  );
}

export default PlayerMenu;
