import { ResetCSS } from "./globals/resetCSS";
import * as S from "./styled";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import PageContent from "./components/page";
import Navbar from "./components/navbar";
import Home from "./components/homepage";

function App() {
  return (
    <ChakraProvider>
      <ResetCSS />
      <Navbar />
      <PageContent />
      <Home />
    </ChakraProvider>
  );
}

export default App;
