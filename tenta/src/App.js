import { ResetCSS } from "./utils/resetCSS";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PrivateRoute from "./utils/private_route";
import NotFound from "./pages/not_found";
import Play from "./pages/play";
import Whitelist from "./pages/whitelist";
import NavBar from "./components/globals/nav_bar";
import Footer from "./components/globals/footer";
import Whitepaper from "./pages/whitepaper";
import * as S from "./styled";
import Journal from "./pages/journal";

function App() {
  return (
    <S.MainDiv>
      <ChakraProvider>
        <ResetCSS />
        <NavBar />
        <BrowserRouter>
          <Routes>
            {/* Private */}
            <Route
              exact
              path="/play"
              element={
                <PrivateRoute>
                  <Journal />
                </PrivateRoute>
              }
            ></Route>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/whitelist" element={<Whitelist />} />
            <Route exact path="/whitepaper" element={<Whitepaper />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ChakraProvider>
    </S.MainDiv>
  );
}

export default App;
