import { ResetCSS } from "./services/resetCSS";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Metamask from "./components/metamask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./pages/play";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import { Component } from "react";
import PrivateRoute from "./services/private_route";
class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <ResetCSS />
        <Navbar title="Cryminals" />
        <BrowserRouter>
          <Routes>
            {/* Private */}
            <Route exact path="/play" element={<PrivateRoute />}>
              <Route exact path="/play" element={<Play />} />
            </Route>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    );
  }
}

export default App;

// import PageHandler from "./pages";

/* <PageHandler />  */
