import React, { useEffect, useState } from "react";
import * as S from "./styled";
import useCharacters from "../../hooks/character-hooks";
import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/button";
import { Skeleton } from "@chakra-ui/skeleton";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Divider } from "@chakra-ui/layout";
import {
  Tooltip,
  Icon,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdRefresh,
  MdSort,
} from "react-icons/md";
import Character from "../character";
import api from "../../services/api";
import { EditIcon } from "@chakra-ui/icons";
import { createStandaloneToast } from "@chakra-ui/toast";

function PlayerMenu() {
  const [pagination, setPagination] = useState({
    offset: 0,
    itemsPerPage: 9,
    totalItems: 0,
  });
  const toast = createStandaloneToast();
  const [pageIsLoaded, setPageIsLoaded] = useState(false);
  const { characterState, getCharacters } = useCharacters();
  const [user, setUser] = useState({});
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
        var account = await (await _api.fetchAccount(token)).data;

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

        getCharacters(token);
      } catch (err) {
        toast({
          position: "bottom",
          title: "Erro :(",
          description: err.message,
          status: "error",
        });
      }
    };

    fetchAccount();
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
        <Avatar size="2xl" src={user.avatar || null} />
      </Skeleton>
      <Skeleton
        startColor="#00173B"
        endColor="#0D121A"
        isLoaded={pageIsLoaded}
        width="150px"
        justifyContent="center"
        display="flex"
      >
        <Heading size="lg" maxW="175px" isTruncated>
          {user.username || "Username"}
        </Heading>
      </Skeleton>
      <Skeleton
        startColor="#00173B"
        endColor="#0D121A"
        isLoaded={pageIsLoaded}
        width="100px"
        // justifyContent="center"
        // display="flex"
      >
        <Text fontSize="xs" maxWidth="100px" marginBottom="8px" isTruncated>
          {user.address || "Address"}
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
            <h3>{user.money || "0"}</h3>
          </Skeleton>
        </S.StatusDiv>
        <S.StatusDiv>
          <h2>Respect</h2>
          <Skeleton
            startColor="#00173B"
            endColor="#0D121A"
            isLoaded={pageIsLoaded}
          >
            <h3>{user.respect || "0"}</h3>
          </Skeleton>
        </S.StatusDiv>
        <S.StatusDiv>
          <h2>Power</h2>
          <Skeleton
            startColor="#00173B"
            endColor="#0D121A"
            isLoaded={pageIsLoaded}
          >
            <h3>{user.power || "0"}</h3>
          </Skeleton>
        </S.StatusDiv>
      </S.UserInfo>
      <Divider marginTop="8px" />
      <Tabs
        isFitted
        colorScheme="gray"
        size="sm"
        // align="center"
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
            <Menu closeOnSelect={false}>
              <Tooltip label="Sort by" placement="top">
                <MenuButton
                  as={IconButton}
                  variant="ghost"
                  icon={<Icon w={5} h={5} as={MdSort} />}
                  size="xs"
                />
              </Tooltip>
              <MenuList minWidth="240px" bgColor="black">
                <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                  <MenuItemOption value="id">Id</MenuItemOption>
                  <MenuItemOption value="rarity">Rarity</MenuItemOption>
                  <MenuItemOption value="power">Power</MenuItemOption>
                  <MenuItemOption value="status">Status</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            <Tooltip label="Refresh" placement="top">
              <IconButton
                isLazy
                variant="ghost"
                size="xs"
                icon={<Icon w={5} h={5} as={MdRefresh} />}
              />
            </Tooltip>
            <S.PanelContent>
              <S.ArrowButtons>
                <MdOutlineKeyboardArrowLeft />
              </S.ArrowButtons>
              <Wrap justify="center">
                {characterState.characters
                  .slice(
                    pagination.offset,
                    pagination.offset + pagination.itemsPerPage
                  )
                  .map((character, id) => {
                    return (
                      <WrapItem p="2">
                        <Character
                          item
                          // showSellingOptions={true}
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
                  })}
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
