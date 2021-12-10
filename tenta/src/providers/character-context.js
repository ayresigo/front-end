import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const CharacterContext = createContext({
  loading: false,
  characters: [],
});

const CharacterProvider = ({ children }) => {
  const [characterState, setCharacterState] = useState({
    hasCharacter: false,
    loading: false,
    characters: [],
  });

  const _api = new api();

  const getCharacters = async (id) => {
    var characters = await (await _api.getCharacters(id)).data;
    setCharacterState({ ...characterState, characters: characters });
  };

  const value = {
    characterState,
    getCharacters: useCallback((id) => {
      getCharacters(id);
    }, []),
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
