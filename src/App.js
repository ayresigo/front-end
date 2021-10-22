import { ResetCSS } from "./globals/resetCSS";
import Navbar from "./components/navbar";
import PlayerMenu from "./components/player-menu";

function App() {
  return (
    <div>
      <ResetCSS />
      <Navbar />
      <PlayerMenu />

    </div>
  );
}

export default App;
