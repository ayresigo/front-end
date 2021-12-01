import React, { useState } from "react";
import * as S from "./styled";
import { Button } from "@chakra-ui/button";
import api from "../../services/api";

function Recruit() {
  const [click, setClick] = useState(false);
  const [character, setCharacter] = useState(null);
  const _api = new api();

  const handleClick = async () => {
    setClick(true);
    var _character = await _api.createCharacter();
    setClick(false);
    setCharacter(_character.data);
    var address = localStorage.getItem("address");
    if (address) {
      await _api.addCharacter(_character.data, address);
      window.location.reload();
    }
  };
  return (
    <>
      <Button isLoading={click} onClick={handleClick}>
        Clique aqui para mintar seu NFT
      </Button>
      {character ? (
        <div>
          Nome: {character.name}
          <br />
          Gênero: {character.gender}
          <br />
          Raridade: {character.rarity}
          <br />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Recruit;
