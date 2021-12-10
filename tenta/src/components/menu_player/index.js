import React, { useEffect, useState } from "react";
import * as S from "./styled";
import useCharacters from "../../hooks/character-hooks";
import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Skeleton } from "@chakra-ui/skeleton";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Divider } from "@chakra-ui/layout";
import { Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Character from "../character";
import api from "../../services/api";

function PlayerMenu() {
  const [pageIsLoaded, setPageIsLoaded] = useState(false);
  const { characterState, getCharacters } = useCharacters();
  const [user, setUser] = useState({
    id: null,
    username: "Username",
    address: "Address",
    avatar: null,
    money: 0,
    respect: 0,
    power: 0,
    inventory: [{}],
    characters: [{}],
    enterprises: [{}],
  });
  const toggleLoad = () => {
    if (pageIsLoaded) setPageIsLoaded(false);
    else setPageIsLoaded(true);
  };
  const colors = useColorModeValue(
    ["green.900", "blue.900", "red.900"],
    ["green.500", "blue.900", "red.900"]
  );
  const [tabIndex, setTabIndex] = useState(1);
  const bg = colors[tabIndex];
  const _api = new api();

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");
        var account = await (await _api.getAccount(token)).data;

        setUser({
          ...user,
          id: account.id,
          username: account.username,
          address: account.address,
          avatar: account.avatar,
          money: account.money,
          respect: account.respect,
          power: account.power,
        });

        getCharacters(account.id);
      } catch (err) {
        console.log(err.message);
      }
    };
  }, []);

  return (
    <S.MainDiv>
      {/* {pageIsLoaded ? <Avatar /> : <SkeletonCircle />} */}
      <Skeleton
        startColor="#00173B"
        endColor="#0D121A"
        isLoaded={pageIsLoaded}
        className="avatar"
        marginTop="15px"
      >
        <Avatar size="2xl" />
      </Skeleton>

      <Skeleton startColor="#00173B" endColor="#0D121A" isLoaded={pageIsLoaded}>
        <Heading size="lg" maxW="300px" isTruncated>
          Username
        </Heading>
      </Skeleton>
      <Skeleton startColor="#00173B" endColor="#0D121A" isLoaded={pageIsLoaded}>
        <Text as="sup" maxWidth="100px" isTruncated>
          Address
        </Text>
      </Skeleton>
      <S.UserInfo>
        <S.StatusDiv>
          <h2>Money</h2>
          <Skeleton
            startColor="#00173B"
            endColor="#0D121A"
            isLoaded={pageIsLoaded}
          >
            <h3>150</h3>
          </Skeleton>
        </S.StatusDiv>
        <S.StatusDiv>
          <h2>Respect</h2>
          <Skeleton
            startColor="#00173B"
            endColor="#0D121A"
            isLoaded={pageIsLoaded}
          >
            <h3>150</h3>
          </Skeleton>
        </S.StatusDiv>
        <S.StatusDiv>
          <h2>Power</h2>
          <Skeleton
            startColor="#00173B"
            endColor="#0D121A"
            isLoaded={pageIsLoaded}
          >
            <h3>150</h3>
          </Skeleton>
        </S.StatusDiv>
      </S.UserInfo>
      <Divider marginTop="8px" />
      <Tabs
        isFitted
        colorScheme="gray"
        size="sm"
        align="center"
        onChange={(index) => setTabIndex(index)}
        bg={bg}
        defaultIndex={1}
        marginTop="15px"
      >
        <TabList>
          <Tab _selected={{ color: "white", bg: "green.500" }}>Inventory</Tab>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>My Gang</Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>Enterprises</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="2">
            <p>My Items!</p>
          </TabPanel>
          <TabPanel p="2">
            <S.PanelContent>
              <S.ArrowButtons>
                <MdOutlineKeyboardArrowLeft />
              </S.ArrowButtons>
              <Wrap justify="center">
                <WrapItem p="1">
                  <Character item />
                </WrapItem>
              </Wrap>
              <S.ArrowButtons>
                <MdOutlineKeyboardArrowRight />
              </S.ArrowButtons>
            </S.PanelContent>
            Recruit
          </TabPanel>
          <TabPanel p="2">
            <p>My Enterprises!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button
        onClick={() => {
          toggleLoad();
        }}
        marginTop="15px"
      >
        Toggle Load
      </Button>
    </S.MainDiv>
  );
}

export default PlayerMenu;
