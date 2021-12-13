import { Heading, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import * as S from "./styled";

function RobberyItem(props) {
  return (
    <S.MainDiv>
      <Tooltip label={props.description}>
        <S.Button bg={props.background}>
          <S.FixedInfo className="head">
            <Heading align="center" fontSize="xl" isTruncated>
              {props.name}
            </Heading>
          </S.FixedInfo>
          <Text className="robbery_info">Reward: {props.reward}</Text>
          <Text className="robbery_info">Duracao: {props.duration}</Text>
          <Text className="robbery_info">Energia: {props.stamina}</Text>
          <Text className="robbery_info">Poder: {props.power}</Text>
          <Text className="robbery_info">
            {" "}
            Participantes: {props.minParticipants} - {props.maxParticipants}{" "}
          </Text>
          <Text className="robbery_info">
            Risco de Emboscada: {props.ambushRisk}%
          </Text>
          <Text className="robbery_info">
            Risco de prisão: {props.prisonRisk}%
          </Text>
          <S.FixedInfo className="foot">Reward</S.FixedInfo>
        </S.Button>
      </Tooltip>
    </S.MainDiv>
  );
}

export default RobberyItem;
