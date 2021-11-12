import { ResetCSS } from "./services/resetCSS";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import PageHandler from "./pages";

function App() {
  return (
    <ChakraProvider>
      <ResetCSS />
      <Navbar />
      <PageHandler />
    </ChakraProvider>
  );
}

export default App;
