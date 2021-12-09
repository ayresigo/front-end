import React, { useState } from "react";
import * as S from "./styled";
import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { SkeletonCircle, Skeleton, SkeletonText } from "@chakra-ui/skeleton";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { MdBluetooth } from "react-icons/md";
import { useColorModeValue } from "@chakra-ui/color-mode";

function PlayerMenu() {
  const [pageIsLoaded, setPageIsLoaded] = useState(false);
  const toggleLoad = () => {
    if (pageIsLoaded) setPageIsLoaded(false);
    else setPageIsLoaded(true);
  };
  const colors = useColorModeValue(
    ["green.900", "red.900", "blue.900"],
    ["green.500", "red.500", "blue.500"]
  );
  const [tabIndex, setTabIndex] = useState(1);
  const bg = colors[tabIndex];
  return (
    <S.MainDiv>
      {/* {pageIsLoaded ? <Avatar /> : <SkeletonCircle />} */}
      <Skeleton
        startColor="gray"
        endColor="white"
        isLoaded={pageIsLoaded}
        className="avatar"
      >
        <Avatar size="2xl" />
      </Skeleton>

      <Skeleton isLoaded={pageIsLoaded}>
        <h1>Username</h1>
      </Skeleton>
      <S.UserInfo>
        <Skeleton isLoaded={pageIsLoaded}>
          <h1>Money</h1>
          <h1>100</h1>
        </Skeleton>
        <Skeleton isLoaded={pageIsLoaded}>
          <h1>Respect</h1>
          <h1>200</h1>
        </Skeleton>
        <Skeleton isLoaded={pageIsLoaded}>
          <h1>TotalPower</h1>
          <h1>300</h1>
        </Skeleton>
      </S.UserInfo>
      <Tabs
        isFitted
        colorScheme="gray"
        size="sm"
        align="center"
        onChange={(index) => setTabIndex(index)}
        bg={bg}
        defaultIndex={1}
      >
        <TabList mb="1em">
          <Tab _selected={{ color: "white", bg: "green.500" }}>Inventory</Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>My Gang</Tab>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>Enterprises</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>My Items!</p>
          </TabPanel>
          <TabPanel>
            <p>My Characters!</p>
          </TabPanel>
          <TabPanel>
            <p>My Enterprises!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button
        onClick={() => {
          toggleLoad();
        }}
      >
        Toggle Load
      </Button>
    </S.MainDiv>
  );
}

export default PlayerMenu;
