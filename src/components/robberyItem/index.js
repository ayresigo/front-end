import { Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { MdAttachMoney } from "react-icons/md";
import * as S from "./styled";

function RobberyItem(props) {
  return (
    <S.MainWrapper>
      <S.BackgroundWrapper className="bg" background={props.item.image} />
      <S.BlackWrapper className="black" />
      <S.InfoWrapper>
        <h1>{props.item.name}</h1>
        <h2>
          <div>Difficulty</div> {props.item.difficulty}
        </h2>
        <h3>
          <div>Stamina</div> {props.item.stamina}
        </h3>
        <h4>
          <div>Reward</div> {props.item.reward}
        </h4>
      </S.InfoWrapper>
    </S.MainWrapper>
  );
}

export default RobberyItem;
