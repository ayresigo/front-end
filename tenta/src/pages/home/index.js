import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

function Home() {
  return (
    <S.MainDiv>
      <Link to="/play">Play</Link>/
      <Link
        to="/whitepaper"
        // target="_blank"
      >
        Whitepaper
      </Link>
      /<Link to="/whitelist">Whitelist</Link>
    </S.MainDiv>
  );
}

export default Home;
