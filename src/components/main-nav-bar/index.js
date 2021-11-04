import React from "react";
import { Box, Flex, Spacer, Heading } from "@chakra-ui/react";
import MetamaskHandler from "../metamask-test/index.js";

function MainNavBar() {
  return (
    <Flex bg="red.500">
      <Box p="2">
        <Heading size="md">Cryminals</Heading>
      </Box>
      <Spacer />
      <Box>
        <MetamaskHandler />
      </Box>
    </Flex>
  );
}

export default MainNavBar;
