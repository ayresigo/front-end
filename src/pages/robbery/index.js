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
import useCharacters from "../../hooks/character-hooks";
import { CharacterStatus } from "../../components/character-status/character-status";
import api from "../../services/api";

function Robbery() {
  const { characterState, getCharacters } = useCharacters();
  const [modal, setModal] = useState({ isOpen: false, value: {} });
  const [robberies, setRobberies] = useState([]);
  const [robberyInfo, setRobberyInfo] = useState({});
  const [async, setAsync] = useState(true);
  const [testTrigger, setTestTrigger] = useState(false);
  const _api = new api();

  useEffect(() => {
    const _getRobberies = async () => {
      var _robberies = await (await _api.getRobberies(1)).data;
      setRobberies(_robberies);
      setAsync(false);
    };

    if (async) _getRobberies();
  }, [robberies, async]);

  const getDataFromChild = (val) => {
    if (robberyInfo.participants) {
      setRobberyInfo({
        ...robberyInfo,
        participants: [...robberyInfo.participants, { characterId: val }],
      });
    } else {
      setRobberyInfo({
        ...robberyInfo,
        participants: [{ characterId: val }],
      });
    }
  };

  const startRobbery = async () => {
    const token = await localStorage.getItem("token");
    setRobberyInfo({ ...robberyInfo, token });
    setTestTrigger(true);
  };

  useEffect(() => {
    if (testTrigger) {
      console.log(robberyInfo);
      const stringfy = JSON.stringify(robberyInfo);
      // console.log(stringfy);
      _api.startRobery(robberyInfo, true);
    }
  }, [testTrigger]);

  return (
    <S.MainWrapper>
      Robbery
      <Wrap justify="center">
        {robberies.map((robbery, id) => {
          return (
            <WrapItem p="1">
              <button
                onClick={(e) => {
                  setModal({ isOpen: true, value: { robbery } });
                  setRobberyInfo({ ...robberyInfo, robberyId: robbery.id });
                }}
              >
                <RobberyItem item={robbery} />
              </button>
            </WrapItem>
          );
        })}
      </Wrap>
      <Modal isOpen={modal.isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Escolher personagem</ModalHeader>
          {/* <ModalCloseButton
            onClick={(e) => setModal({ ...modal, isOpen: false })}
          /> */}
          {modal.value.robbery ? (
            <ModalBody>
              <div>Nome: {modal.value.robbery.name}</div>
              <div>Descrição: {modal.value.robbery.description}</div>
              <div>Dificuldade: {modal.value.robbery.difficulty}</div>
              <div>Poder necessário: {modal.value.robbery.powerNeeded}</div>
              <div>Premiação: {modal.value.robbery.reward}</div>
              <div>Stamina necessária: {modal.value.robbery.stamina}</div>
              <div>
                Participantes: {modal.value.robbery.minPart} min. ~{" "}
                {modal.value.robbery.maxPart} max.
              </div>
              <br />
              Selecione o(s) participante(s):
            </ModalBody>
          ) : null}
          <Wrap justify="center">
            {characterState.characters.map((character) => {
              if (character.status === "IDLING") {
                return (
                  <WrapItem p="2">
                    <Character
                      sendData={getDataFromChild}
                      selectable={true}
                      alignment={character.alignment}
                      avatar={character.avatar}
                      genter={character.gender}
                      health={character.health}
                      characterId={character.id}
                      job={character.job}
                      moneyRatio={character.moneyRatio}
                      name={character.name}
                      owner={character.owner}
                      power={character.power}
                      rarity={character.rarity}
                      stamina={character.stamina}
                      status={CharacterStatus.filter((item) => {
                        return item.queryName === character.status;
                      })}
                    />
                  </WrapItem>
                );
              } else {
                return null;
              }
            })}
          </Wrap>
          <ModalFooter>
            <Button
              variant="ghost"
              type="submit"
              onClick={(e) => {
                setModal({ ...modal, isOpen: false });
                startRobbery();
              }}
            >
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </S.MainWrapper>
  );
}

export default Robbery;
