import { ResetCSS } from "./globals/resetCSS";
import * as S from "./styled";
import Navbar from "./components/navbar";
import PlayerMenu from "./components/player-menu";

function App() {
  return (
    <S.BackgroundWrapper>
      <ResetCSS />
      <Navbar />
      <PlayerMenu />
    </S.BackgroundWrapper>
  );
}

export default App;
