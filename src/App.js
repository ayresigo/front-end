import { ResetCSS } from "./globals/resetCSS";
import * as S from "./styled";
import Navbar from "./components/navbar";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MetamaskHandler from "./components/metamask-test/index.js";
import MainPlayerMenu from "./components/main-player-menu";
import MainNavBar from "./components/main-nav-bar";

function App() {
  return (
    <ChakraProvider>
      <ResetCSS />
      {/* <Navbar /> */}
      <MainNavBar />
      <MainPlayerMenu />
      <MetamaskHandler />
    </ChakraProvider>
  );
}

export default App;
