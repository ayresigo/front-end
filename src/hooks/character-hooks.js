import { useContext } from "react";
import { CharacterContext } from "../providers/character-context";

const useCharacter = () => {
  const { characterState, getCharacters } = useContext(CharacterContext);

  return { characterState, getCharacters };
};

export default useCharacter;
