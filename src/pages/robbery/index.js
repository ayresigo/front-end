import { Select } from "@chakra-ui/select";
import React, { useEffect, useState } from "react";
import Character from "../../components/character-status";
import { RobberyMock } from "./mock";
import { Center, Divider, Wrap, WrapItem } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import * as S from "./styled";
import RobberyItem from "../../components/robberyItem";

function Robbery() {
  const [value, setValue] = useState({ value: undefined });
  const [robberyData, setRobberyData] = useState(null);
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    var robbery = RobberyMock.filter((item) => {
      return item.option === value.value;
    });
    var _robbery = null;
    if (value.value) {
      _robbery = robbery[0];

      setRobberyData({
        nome: _robbery.nome,
        option: _robbery.option,
        description: _robbery.description,
        difficulty: _robbery.difficulty,
        reward: _robbery.reward,
        stamina: _robbery.stamina,
      });
      setIsSet(true);
    }
  }, [value]);

  return (
    <S.MainWrapper>
      Robbery
      <Wrap justify="center">
        {RobberyMock.map((item, id) => {
          return (
            <WrapItem p="1">
              <RobberyItem item={item} />
            </WrapItem>
          );
        })}
      </Wrap>
    </S.MainWrapper>
  );
}

export default Robbery;
