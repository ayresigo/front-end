import { ResetCSS } from "./services/resetCSS";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./pages/play";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import { Component } from "react";
import Metamask from "./components/metamask";

class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <ResetCSS />
        <Navbar title="Cryminals" />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/play" element={<Play />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    );
  }
}

export default App;

// import PageHandler from "./pages";

/* <PageHandler />  */
