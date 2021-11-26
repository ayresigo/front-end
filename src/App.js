import { ResetCSS } from "./globals/resetCSS";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Metamask from "./components/metamask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./pages/play";
import Home from "./pages/home";
import Recruit from "./pages/recruit";
import { Component } from "react";
import PrivateRoute from "./services/private_route";
import CharacterProvider from "./providers/character-context";
import Robbery from "./pages/robbery";
import TimeProvider from "./providers/time-context";
import Timer from "./pages/timer";
class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <CharacterProvider>
          <TimeProvider>
            <ResetCSS />
            <Navbar title="Cryminals" />
            <BrowserRouter>
              <Routes>
                {/* Private */}
                <Route
                  exact
                  path="/recruit"
                  element={
                    <PrivateRoute>
                      <Recruit />
                    </PrivateRoute>
                  }
                ></Route>

                <Route
                  exact
                  path="/play"
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                ></Route>

                <Route
                  exact
                  path="/robbery"
                  element={
                    <PrivateRoute>
                      <Robbery />
                    </PrivateRoute>
                  }
                ></Route>

                <Route
                  exact
                  path="/timer"
                  element={
                    <PrivateRoute>
                      <Timer/>
                    </PrivateRoute>
                  }
                ></Route>

                <Route exact path="/" element={<Home />} />
                {/* <Route exact path="/recruit" element={<Recruit />} /> */}
                <Route path="*" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </TimeProvider>
        </CharacterProvider>
      </ChakraProvider>
    );
  }
}

export default App;

// import PageHandler from "./pages";

/* <PageHandler />  */
