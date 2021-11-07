import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Metamask from "../metamask";

function Navbar() {
  return (
    <Flex>
      <Box ml="8" mt="1">
        <Text
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="18"
          fontWeight="extrabold"
        >
          Cryminals
        </Text>
      </Box>
      <Spacer />
      <Box>
        {/* Add gradient to metamask text */}
        <Metamask />
      </Box>
    </Flex>
  );
}

export default Navbar;
