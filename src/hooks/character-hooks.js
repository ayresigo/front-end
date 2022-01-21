import { useContext } from "react";
import { CharacterContext } from "../providers/character-context";

const useCharacter = () => {
  const { characterState, setCharacterState, getCharacters } =
    useContext(CharacterContext);

  return { characterState, setCharacterState, getCharacters };
};

export default useCharacter;
