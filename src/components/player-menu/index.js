import React from "react";
import PlayerCard from "../player-card";
import * as S from "./styled";

function PlayerMenu() {
  return (
    <S.PlayerMenuWrapper>
      <PlayerCard />

      {/* Menu Tabs */}
      <S.TabsWrapper
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <S.TabListWrapper>
          <S.TabWrapper>Inventory</S.TabWrapper>
          <S.TabWrapper>Shop</S.TabWrapper>
        </S.TabListWrapper>
        <S.TabPanelWrapper>
          <S.ListWrapper>Ops</S.ListWrapper>
        </S.TabPanelWrapper>
        <S.TabPanelWrapper>
          <S.ListWrapper>Item</S.ListWrapper>
        </S.TabPanelWrapper>
      </S.TabsWrapper>
      {/* End Tabs */}
    </S.PlayerMenuWrapper>
  );
}

export default PlayerMenu;
