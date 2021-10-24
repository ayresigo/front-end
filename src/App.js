import { ResetCSS } from "./globals/resetCSS";
import * as S from "./styled";
import Navbar from "./components/navbar";
// import PlayerMenu from "./components/player-menu";
// import { ethers } from "ethers";
// import Metamask from "./components/metamask-handle";

// const App = () => {
//   return (
//     <S.BackgroundWrapper>
//       <ResetCSS />
//       <Metamask />
//       {/* <Navbar /> */}
//       {/* <PlayerMenu /> */}
//       {/* <AuthTest /> */}
//     </S.BackgroundWrapper>
//   );
// };

// export default App;
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Metamask from "./components/metamask-handle";
import MetaMaskLoginButton from "./components/metamask-login-button";
import MetamaskTest from "./components/metamask-test";

function App() {
  return (
    <ChakraProvider>
      <ResetCSS />
      <Metamask colorScheme="teal" size="xs" />
      <MetaMaskLoginButton />
      <MetamaskTest />
    </ChakraProvider>
  );
}

export default App;
