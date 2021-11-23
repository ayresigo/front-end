import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import {
  Input,
  InputGroup,
  InputAddon,
  InputLeftAddon,
  InputRightAddon,
  InputElement,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { Center, Divider, Wrap, WrapItem } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";

import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Character from "../character-status";
import * as S from "./styled";

function PlayerPofile() {
  const _api = new api();
  const [user, setUser] = useState({
    userId: 0,
    username: "",
    address: "",
    avatar: "",
    money: 0,
    respect: 0,
    totalpower: 0,
  });
  const [modal, setModal] = useState({ value: "", isOpen: false });
  const [characters, setCharacters] = useState([]);
  const [async, setAsync] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      _api.editUsername(user.address, modal.value);
      setModal({ isOpen: false });
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = localStorage.getItem("token");
        var tokenResponse = await _api.checkToken(token);
        var account = await _api.getAccount(tokenResponse.data.address);
        var userInfo = account.data;
        var _characters = await _api.getCharacters(userInfo.id);
        var __characters = _characters.data;
        setUser({
          ...user,
          userId: userInfo.id,
          username: userInfo.username,
          address: userInfo.address,
          avatar: userInfo.avatar,
          money: userInfo.money,
          respect: userInfo.respect,
          totalpower: userInfo.totalPower,
        });
        setCharacters(...characters, __characters);
      } catch (err) {
        console.log(err.message);
      }
      return user;
    };

    if (async) {
      checkToken();
      setAsync(false);
    }
  }, [async]);

  useEffect(() => {
    if (user.username === "null") {
      setModal({ ...modal, isOpen: true });
    }
  }, [user, modal]);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

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
                onChange={(e) => setModal({ ...modal, value: e.target.value })}
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
      <Avatar size="2xl" src={user.avatar}>
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <S.ProfileWrapper>
        <S.SocialInfoWrapper>
          <h1>{user.username}</h1>
          <h2>{user.address.slice(0, 6) + "..." + user.address.slice(-4)}</h2>
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
            <h1>{user.totalpower}</h1>
          </li>
        </S.StatusWrapper>
      </S.ProfileWrapper>
      <Divider />
      My Gang
      <Wrap justify="center">
        {characters.map((character, id) => {
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
