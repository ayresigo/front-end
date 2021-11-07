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
        <h1>Working...</h1>
      </S.CurrentStatusWrapper>
      <S.PlayerInfoWrapper>
        <S.PlayerPersonalInfoWrapper>
          <h1>Ayresigo</h1>
          <h2>0x8Da79...59A3</h2>
        </S.PlayerPersonalInfoWrapper>
        <S.PlayerStatusWrapper>
          <h3>
            <i class="fas fa-fist-raised" /> Poder:
            <br />
            100
          </h3>
          <h3>
            <i class="fas fa-crown" /> Respeito:
            <br />
            100
          </h3>
          <h3>
            <i class="fas fa-money-bill-wave-alt" /> Dinheiro:
            <br />
            60
          </h3>
          <h3>
            <i class="fas fa-charging-station" /> Stamina:
            <br />
            15/50
          </h3>
        </S.PlayerStatusWrapper>
      </S.PlayerInfoWrapper>
    </S.PlayerCardWrapper>
  );
}

export default PlayerCard;
