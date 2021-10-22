import React from "react";
import * as S from "./styled";

function PlayerCard() {
  return (
    <S.PlayerCardWrapper>
      <S.CurrentStatusWrapper>
        <S.PlayerAvatarWrapper
          src="https://mafiavspolice.io/wp-content/uploads/2021/10/cropped-mafia-6.png"
          alt="avatar"
        />
        <h1>CurrentStatus</h1>
      </S.CurrentStatusWrapper>
      <S.PlayerInfoWrapper>
        <S.PlayerPersonalInfoWrapper>
          <h1>Username</h1>
          <h2>Address</h2>
        </S.PlayerPersonalInfoWrapper>
        <S.PlayerStatusWrapper>
          <h3>
            <i class="fas fa-fist-raised" /> Poder:
          </h3>
          <h3>
            <i class="fas fa-crown" /> Respeito:
          </h3>
          <h3>
            <i class="fas fa-money-bill-wave-alt" /> Dinheiro:
          </h3>
          <h3>
            <i class="fas fa-charging-station" /> Stamina:
          </h3>
        </S.PlayerStatusWrapper>
      </S.PlayerInfoWrapper>
    </S.PlayerCardWrapper>
  );
}

export default PlayerCard;
