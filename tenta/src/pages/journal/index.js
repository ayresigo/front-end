import { Divider, Text } from "@chakra-ui/react";
import React from "react";
import * as S from "./styled";

function Journal() {
  return (
    <S.MainDiv>
      <S.JournalTitle>The City News</S.JournalTitle>
      <Divider />
      <S.JournalContent>
        <S.FirstContentImageAndLabel>
          <S.FirstContentImage src="https://i2.wp.com/www.estilogangster.com.br/wp-content/uploads/2016/08/mafia-reuni%C3%A3o-do-Apalachin.jpg?fit=730%2C430&ssl=1" />
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </S.FirstContentImageAndLabel>
      </S.JournalContent>
    </S.MainDiv>
  );
}

export default Journal;
