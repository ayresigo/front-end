import { ResetCSS } from "./globals/resetCSS";
import * as S from "./styled";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Game from "./components/pages/game";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import PageHandler from "./components/pages";

function App() {
  return (
    <ChakraProvider>
      <ResetCSS />
      <Navbar />
      {/* <Game />
      <Home /> */}
      <PageHandler />
    </ChakraProvider>
  );
}

export default App;
