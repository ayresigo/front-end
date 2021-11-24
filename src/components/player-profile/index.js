import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Center, Divider, Link, Wrap, WrapItem } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useEffect, useState } from "react";
import { MdBloodtype } from "react-icons/md";
import useCharacters from "../../hooks/character-hooks";
import api from "../../services/api";
import Character from "../character-status";
import * as S from "./styled";

function PlayerPofile() {
  const { characterState, getCharacters } = useCharacters();
  const [user, setUser] = useState({
    userId: undefined,
    username: undefined,
    address: undefined,
    avatar: undefined,
    money: undefined,
    respect: undefined,
    totalpower: undefined,
  });
  const [modal, setModal] = useState({ isOpen: false, message: undefined });
  const [async, setAsync] = useState(true);
  const _api = new api();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");
        var decodedToken = await (await _api.checkToken(token)).data;
        var account = await (await _api.getAccount(decodedToken.address)).data;
        // var characters = await (await _api.getCharacter(account.id)).data;

        setUser({
          ...user,
          userId: account.id,
          username: account.username,
          address: account.address,
          avatar: account.avatar,
          money: account.money,
          respect: account.respect,
          totalpower: account.totalPower,
        });

        getCharacters(account.id);
      } catch (err) {
        console.log(err.message);
      }
      return user;
    };

    if (async) {
      fetchCharacters();
      setAsync(false);
    }
  }, [async]);

  useEffect(() => {
    if (!modal.isOpen) {
      if (user.username === "null") {
        setModal({ ...modal, isOpen: true });
      }
    }
  }, [user, modal]);

  const calculateTotalPower = () => {
    var totalPower = 0;
    characterState.characters.map((character, id) => {
      totalPower += character.power;
    });
    return totalPower;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      _api.editUsername(user.address, modal.message);
      setModal({ ...modal, isOpen: false });
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <S.MainWrapper>
      <Modal isOpen={modal.isOpen}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>Escolher nome de exibição</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              Olá, Seja Bem vindo!
              <br />
              Para começar a jogar, você precisa escolher um novo nome de
              exibição!
              <br />
              <br />
              <Input
                textAlign="center"
                onChange={(e) =>
                  setModal({ ...modal, message: e.target.value })
                }
              />
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" type="submit">
                Confirmar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      <Avatar size="2xl" src={user.avatar} />
      <S.ProfileWrapper>
        <S.SocialInfoWrapper>
          <h1>{user.username}</h1>
          {user.address ? (
            <h2>{user.address.slice(0, 6) + "..." + user.address.slice(-4)}</h2>
          ) : (
            <h2>...</h2>
          )}
        </S.SocialInfoWrapper>
        <Divider />
        <S.StatusWrapper>
          <li>
            <h2>Money</h2>
            <Divider />
            <h1>{user.money}</h1>
          </li>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <li>
            <h2>Respect</h2>
            <Divider />
            <h1>{user.respect}</h1>
          </li>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <li>
            <h2>TotalPower</h2>
            <Divider />
            <h1>{calculateTotalPower()}</h1>
          </li>
        </S.StatusWrapper>
      </S.ProfileWrapper>
      <Divider />
      My Gang
      <Wrap justify="center">
        {characterState.characters.map((character, id) => {
          return (
            <WrapItem p="2">
              <Character
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
              />
            </WrapItem>
          );
        })}
      </Wrap>
      <Link to="/recruit">Recrutar</Link>
    </S.MainWrapper>
  );
}

export default PlayerPofile;
