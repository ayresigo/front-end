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
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";

function Robbery() {
  const [value, setValue] = useState({ value: undefined });
  const [robberyData, setRobberyData] = useState(null);
  const [isSet, setIsSet] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, value: "" });

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
      <Modal isOpen={modal.isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Escolher personagem</ModalHeader>
          {/* <ModalCloseButton
            onClick={(e) => setModal({ ...modal, isOpen: false })}
          /> */}
          <ModalBody>Escolha o pesonagem que vai executar a ação</ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              type="submit"
              onClick={(e) => setModal({ ...modal, isOpen: false })}
            >
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      Robbery
      <Wrap justify="center">
        {RobberyMock.map((item, id) => {
          return (
            <WrapItem p="1">
              <button onClick={(e) => setModal({ ...modal, isOpen: true })}>
                <RobberyItem item={item} />
              </button>
            </WrapItem>
          );
        })}
      </Wrap>
    </S.MainWrapper>
  );
}

export default Robbery;
