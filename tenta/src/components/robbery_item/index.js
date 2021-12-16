import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import useCharacters from "../../hooks/character-hooks";
import { Heading, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/toast";
import { Tooltip } from "@chakra-ui/tooltip";
import React, { useEffect, useState } from "react";
import {
  MdAttachMoney,
  MdBolt,
  MdGroups,
  MdLock,
  MdTimer,
} from "react-icons/md";
import { GiHandcuffs, GiPistolGun, GiSurprised } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa";
import * as S from "./styled";
import Character from "../character";

const RobberyItem = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { characterState, setCharacterState } = useCharacters();
  const [isLocked, setIsLocked] = useState(true);
  const [selection, setSelection] = useState({ ids: [] });
  const toast = createStandaloneToast();

  const addSelection = (id) => {
    try {
      if (selection.ids.length < props.maxParticipants) {
        for (var i = 0; i <= selection.ids.length; i++) {
          if (id === selection.ids[i]) {
            removeSelection(id);
          } else {
            setSelection({ ids: [...selection.ids, id] });
            return true;
          }
        }
      } else {
        toast({
          position: "bottom",
          description: "Team limit reached",
          status: "error",
        });
      }
    } catch (err) {
      toast({
        position: "bottom",
        title: "Erro :(",
        description: err.message,
        status: "error",
      });
      return false;
    }
  };

  const removeSelection = (id) => {
    try {
      setSelection({
        ids: selection.ids.filter((_id) => {
          return _id !== id;
        }),
      });
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    console.log(selection);
  }, [selection]);

  return (
    <>
      <S.AuxDiv>
        {isLocked ? (
          <S.MainDiv>
            <Tooltip label="Locked">
              <S.Button>
                <S.FixedInfo className="head">
                  <Heading align="center" fontSize="xl" isTruncated>
                    Locked
                  </Heading>
                </S.FixedInfo>
                <S.Overlay className="overlay" />
                <S.LockedInfo>
                  <Icon className="robbery_info" as={MdLock} w={50} h={50} />
                  <Text className="robbery_info">Locked</Text>
                </S.LockedInfo>
              </S.Button>
            </Tooltip>
          </S.MainDiv>
        ) : (
          <S.MainDiv>
            <Tooltip label={props.description}>
              <S.Button bg={props.background} onClick={onOpen}>
                <S.FixedInfo className="head">
                  <Heading align="center" fontSize="xl" isTruncated>
                    {props.name}
                  </Heading>
                </S.FixedInfo>
                <S.Overlay className="overlay" />
                <S.PopInfo>
                  <S.PopInfoIndividualStat className="robbery_info">
                    <Icon as={MdAttachMoney} />
                    <Text>{props.reward}</Text>
                  </S.PopInfoIndividualStat>
                  <S.PopInfoIndividualStat className="robbery_info">
                    <Icon as={GiPistolGun} />
                    <Text>{props.power}</Text>
                  </S.PopInfoIndividualStat>
                  <S.PopInfoIndividualStat className="robbery_info">
                    <Icon as={MdBolt} />
                    <Text>{props.stamina}</Text>
                  </S.PopInfoIndividualStat>
                  <S.PopInfoIndividualStat className="robbery_info">
                    <Icon as={MdTimer} />
                    <Text>{props.duration}</Text>
                  </S.PopInfoIndividualStat>
                  <S.PopInfoIndividualStat className="robbery_info">
                    <Icon as={MdGroups} />
                    <Text>
                      {props.minParticipants} - {props.maxParticipants}
                    </Text>
                  </S.PopInfoIndividualStat>
                  <S.PopInfoMultiStat className="robbery_info">
                    <S.PopInfoMultiIndividualStat>
                      <Icon as={FaSkullCrossbones} />
                      <Text>{props.deathRisk}%</Text>
                    </S.PopInfoMultiIndividualStat>
                    <S.PopInfoMultiIndividualStat>
                      <Icon as={GiHandcuffs} />
                      <Text>{props.prisonRisk}%</Text>
                    </S.PopInfoMultiIndividualStat>
                    <S.PopInfoMultiIndividualStat>
                      <Icon as={GiSurprised} />
                      <Text>{props.ambushRisk}%</Text>
                    </S.PopInfoMultiIndividualStat>
                  </S.PopInfoMultiStat>
                </S.PopInfo>
              </S.Button>
            </Tooltip>
          </S.MainDiv>
        )}

        <Button
          variant="ghost"
          colorScheme="pink"
          onClick={() => {
            if (isLocked) setIsLocked(false);
            else setIsLocked(true);
          }}
          // onClick={onToggle}
        >
          {isLocked ? "Unlock" : "Lock"}
        </Button>
      </S.AuxDiv>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setSelection({ ids: [] });
        }}
        isCentered
      >
        <ModalOverlay bgColor="rgba(0,0,0,0.5 )" />
        <ModalContent bgColor="rgba(0,0,0,0)">
          <S.ModalMainDiv>
            <ModalHeader>Select a criminal</ModalHeader>
            <ModalCloseButton
              onClose={() => {
                onClose();
                setSelection({ ids: [] });
              }}
            />
            <ModalBody>
              <Wrap>
                {characterState.isLoaded ? (
                  characterState.characters
                    .sort((a, b) => {
                      return a.isAvaliable === b.isAvaliable
                        ? 0
                        : a.isAvaliable
                        ? -1
                        : 1;
                    })
                    .map((character, id) => {
                      var havePower = true;
                      var isAvaliable = true;
                      var haveStamina = true;
                      var haveStatus = true;
                      // if (character.power < props.power && character.status.id != 1 && character.stamina < props.stamina) {
                      //   isAvaliable = false;
                      // }
                      if (character.power < props.power) {
                        havePower = false;
                        isAvaliable = false;
                      }
                      if (character.status.id !== 1) {
                        haveStatus = false;
                        isAvaliable = false;
                      }
                      if (character.stamina < props.stamina) {
                        haveStamina = false;
                        isAvaliable = false;
                      }
                      return (
                        <WrapItem>
                          <Character
                            item
                            // showSellingOptions={true}
                            robberyMenu
                            isSelected={character.isSelected}
                            addSelection={addSelection}
                            removeSelection={removeSelection}
                            isAvaliable={isAvaliable}
                            havePower={havePower}
                            haveStamina={haveStamina}
                            haveStatus={haveStatus}
                            affiliation={character.affiliation}
                            avatar={character.avatar}
                            gender={character.gender}
                            health={character.health}
                            currentHealth={character.currentHealth}
                            characterId={character.id}
                            job={character.job}
                            name={character.name}
                            owner={character.owner}
                            power={character.power}
                            rarity={character.rarity}
                            stamina={character.stamina}
                            currentStamina={character.currentStamina}
                            status={character.status}
                            creationDate={character.creationDate}
                          />
                        </WrapItem>
                      );
                    })
                ) : (
                  <Spinner />
                )}
              </Wrap>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="ghost"
                colorScheme="pink"
                onClick={() => {
                  onClose();
                  setSelection({ ids: [] });
                }}
              >
                Cancel
              </Button>
              {characterState.isLoaded ? (
                <Button variant="ghost" colorScheme="pink">
                  Start
                </Button>
              ) : null}
            </ModalFooter>
          </S.ModalMainDiv>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RobberyItem;
