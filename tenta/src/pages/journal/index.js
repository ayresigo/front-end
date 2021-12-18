import { Divider, Text, Heading } from "@chakra-ui/react";
import React from "react";
import * as S from "./styled";

function Journal() {
  return (
    <S.MainDiv>
      <S.JournalTitle>New City Times</S.JournalTitle>
      <Divider />
      <S.JournalHeadingInfo>
        <Text>Since 2021</Text>
      </S.JournalHeadingInfo>
      <Divider />
      {/* <S.JournalContent> */}
      <Heading textAlign="center" size="2xl">
        Líder da mafia é visto em reunião
      </Heading>
      <S.FirstContent>
        <S.FirstContentImageAndLabel>
          <S.FirstContentImage src="https://i2.wp.com/www.estilogangster.com.br/wp-content/uploads/2016/08/mafia-reuni%C3%A3o-do-Apalachin.jpg?fit=730%2C430&ssl=1" />
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </S.FirstContentImageAndLabel>
        <S.FirstContentText>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            vitae ultricies leo integer malesuada nunc vel. Non diam phasellus
            vestibulum lorem sed risus. Volutpat ac tincidunt vitae semper quis.
            Nulla malesuada pellentesque elit eget. Quam vulputate dignissim
            suspendisse in est ante in nibh. Risus viverra adipiscing at in
            tellus integer feugiat. Dignissim convallis aenean et tortor. Sapien
            et ligula ullamcorper malesuada proin libero nunc consequat
            interdum. Tristique magna sit amet purus gravida quis. Amet justo
            donec enim diam vulputate ut pharetra sit. Elit sed vulputate mi sit
            amet mauris. At imperdiet dui accumsan sit amet. Metus dictum at
            tempor commodo ullamcorper a lacus. Ut tellus elementum sagittis
            vitae et leo duis ut diam. Fermentum posuere urna nec tincidunt
            praesent. Aliquam faucibus purus in massa tempor nec feugiat nisl.
            Cras fermentum odio eu feugiat. Arcu dictum varius duis at. Nullam
            non nisi est sit amet facilisis magna etiam. Ac turpis egestas
            maecenas pharetra convallis posuere morbi. Dapibus ultrices in
            iaculis nunc sed augue lacus viverra vitae.
          </Text>
        </S.FirstContentText>
        <S.FirstContentText>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            vitae ultricies leo integer malesuada nunc vel. Non diam phasellus
            vestibulum lorem sed risus. Volutpat ac tincidunt vitae semper quis.
            Nulla malesuada pellentesque elit eget. Quam vulputate dignissim
            suspendisse in est ante in nibh. Risus viverra adipiscing at in
            tellus integer feugiat. Dignissim convallis aenean et tortor. Sapien
            et ligula ullamcorper malesuada proin libero nunc consequat
            interdum. Tristique magna sit amet purus gravida quis. Amet justo
            donec enim diam vulputate ut pharetra sit. Elit sed vulputate mi sit
            amet mauris. At imperdiet dui accumsan sit amet. Metus dictum at
            tempor commodo ullamcorper a lacus. Ut tellus elementum sagittis
            vitae et leo duis ut diam. Fermentum posuere urna nec tincidunt
            praesent. Aliquam faucibus purus in massa tempor nec feugiat nisl.
            Cras fermentum odio eu feugiat. Arcu dictum varius duis at. Nullam
            non nisi est sit amet facilisis magna etiam. Ac turpis egestas
            maecenas pharetra convallis posuere morbi. Dapibus ultrices in
            iaculis nunc sed augue lacus viverra vitae.
          </Text>
        </S.FirstContentText>
      </S.FirstContent>
      {/* </S.JournalContent> */}
    </S.MainDiv>
  );
}

export default Journal;
