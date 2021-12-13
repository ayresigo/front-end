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
  Spinner,
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
import { id } from "ethers/lib/utils";

function PlayerMenu() {
  const [pagination, setPagination] = useState({
    offset: 0,
    itemsPerPage: 9,
    totalItems: 0,
    firstPage: true,
    lastPage: true,
    click: true,
  });
  const [pageIsLoaded, setPageIsLoaded] = useState(true);
  const [charactersIsLoaded, setCharactersIsLoaded] = useState(true);
  const { characterState, getCharacters } = useCharacters();
  const [user, setUser] = useState({});
  const [tabIndex, setTabIndex] = useState(1);
  const [orderBy, setOrderBy] = useState("id_asc");

  const toast = createStandaloneToast();
  const colors = useColorModeValue(
    ["green.900", "blue.900", "red.900"],
    ["green.500", "blue.900", "red.900"]
  );
  const bg = colors[tabIndex];
  const _api = new api();

  const toggleLoad = () => {
    if (pageIsLoaded) {
      setPageIsLoaded(false);
      setCharactersIsLoaded(false);
    } else {
      setPageIsLoaded(true);
      setCharactersIsLoaded(true);
    }
  };

  const calculateTotalPower = () => {
    var totalPower = 0;
    characterState.characters.map((character, id) => {
      totalPower += character.power;
    });
    return totalPower;
  };

  const showCharactersSpinner = async (token) => {
    try {
      setCharactersIsLoaded(false);
      await getCharacters(token);
      setCharactersIsLoaded(true);
    } catch (err) {
      toast({
        position: "bottom",
        title: "Erro :(",
        description: err.message,
        status: "error",
      });
    }
  };

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Invalid token.");
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

  useEffect(() => {
    var length = characterState.characters.length;
    setPagination({ ...pagination, click: true, totalItems: length });
  }, [characterState]);

  useEffect(() => {
    if (pagination.click) {
      if (pagination.totalItems < pagination.itemsPerPage) {
        setPagination({
          ...pagination,
          click: false,
          lastPage: true,
          firstPage: true,
        });
      } else if (
        pagination.offset >= pagination.itemsPerPage &&
        pagination.offset < pagination.totalItems - pagination.itemsPerPage
      ) {
        setPagination({
          ...pagination,
          click: false,
          lastPage: false,
          firstPage: false,
        });
      } else if (
        pagination.offset < pagination.itemsPerPage &&
        pagination.totalItems > pagination.itemsPerPage
      ) {
        setPagination({
          ...pagination,
          click: false,
          lastPage: false,
          firstPage: true,
        });
      } else if (
        pagination.totalItems - pagination.itemsPerPage < pagination.offset &&
        pagination.offset > 0
      ) {
        setPagination({
          ...pagination,
          click: false,
          lastPage: true,
          firstPage: false,
        });
      }
    }
  }, [pagination]);

  // useEffect(() => {
  //   if (pagination.offset < pagination.itemsPerPage) {
  //     // setPagination({ ...pagination, firstPage: true });
  //   } else {
  //     setPagination({ ...pagination, firstPage: false });
  //   }
  // }, [pagination.offset, pagination.totalItems]);

  // useEffect(() => {
  //   console.log(`pagination.totalItems: ${pagination.totalItems}`);
  //   if (
  //     pagination.totalItems > pagination.itemsPerPage &&
  //     pagination.offset < pagination.totalItems - 9
  //   ) {
  //     console.log("1");
  //     setPagination({ ...pagination, rightArrowIsDisabled: false });
  //   } else {
  //     console.log("2");
  //   }
  // }, [pagination]);

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
            <h3>{calculateTotalPower() || <Spinner size="sm" />}</h3>
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
        width="100%"
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
                  <MenuItemOption
                    value="id"
                    onClick={() => {
                      if (orderBy === "id_asc") setOrderBy("id_desc");
                      else setOrderBy("id_asc");
                    }}
                  >
                    Id
                  </MenuItemOption>
                  <MenuItemOption
                    value="rarity"
                    onClick={() => {
                      if (orderBy === "rarity_asc") setOrderBy("rarity_desc");
                      else setOrderBy("rarity_asc");
                    }}
                  >
                    Rarity
                  </MenuItemOption>
                  <MenuItemOption
                    value="power"
                    onClick={() => {
                      if (orderBy === "power_desc") setOrderBy("power_asc");
                      else setOrderBy("power_desc");
                    }}
                  >
                    Power
                  </MenuItemOption>
                  <MenuItemOption
                    value="status"
                    onClick={() => {
                      if (orderBy === "status_asc") setOrderBy("status_desc");
                      else setOrderBy("status_asc");
                    }}
                  >
                    Status
                  </MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            <Tooltip label="Refresh" placement="top">
              <IconButton
                isLazy
                variant="ghost"
                size="xs"
                icon={<Icon w={5} h={5} as={MdRefresh} />}
                onClick={async () => {
                  const token = localStorage.getItem("token");
                  getCharacters(token);
                  setPagination({
                    ...pagination,
                    totalItems: characterState.characters.length,
                  });
                  // setCharactersIsLoaded(true);
                }}
              />
            </Tooltip>
            <S.PanelContent>
              <S.ArrowButtons
                disabled={pagination.firstPage}
                onClick={() => {
                  if (pagination.offset > 0) {
                    var newOffset = pagination.offset - pagination.itemsPerPage;
                    setPagination({
                      ...pagination,
                      offset: newOffset,
                      click: true,
                    });
                  }
                }}
              >
                <MdOutlineKeyboardArrowLeft />
              </S.ArrowButtons>

              <Wrap justify="center">
                {characterState.isLoaded ? (
                  characterState.characters
                    .sort((a, b) => {
                      switch (orderBy) {
                        case "id_desc":
                          return b.id - a.id;
                        case "name_asc":
                          return a.name.localeCompare(b.name);
                        case "name_desc":
                          return b.name.localeCompare(a.name);
                        case "power_asc":
                          return a.power - b.power;
                        case "power_desc":
                          return b.power - a.power;
                        default:
                          return a.id - b.id;
                      }
                    })
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
                    })
                ) : (
                  <Spinner />
                )}
              </Wrap>

              <S.ArrowButtons
                disabled={pagination.lastPage}
                onClick={() => {
                  if (
                    pagination.offset <
                    pagination.totalItems - pagination.itemsPerPage
                  ) {
                    var newOffset = pagination.offset + pagination.itemsPerPage;
                    setPagination({
                      ...pagination,
                      click: true,
                      offset: newOffset,
                    });
                  }
                }}
              >
                <MdOutlineKeyboardArrowRight />
              </S.ArrowButtons>
            </S.PanelContent>
            {pagination.lastPage ? (
              <>
                {pagination.totalItems} of {pagination.totalItems}
              </>
            ) : (
              <>
                {pagination.offset + pagination.itemsPerPage}
                {" of "}
                {pagination.totalItems}
              </>
            )}
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
