import { Box, Flex } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/react";
import React from "react";

function MainPlayerMenu() {
  return (
    <Flex>
      <Box w="70px" h="10" bg="red.500" />
      <Spacer />
      <Box w="70px" h="10" bg="red.500" />
      <Spacer />
      <Box w="70px" h="10" bg="red.500" />
    </Flex>
  );
}

export default MainPlayerMenu;
