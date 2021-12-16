import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const CharacterContext = createContext({
  loading: false,
  characters: [],
});

const CharacterProvider = ({ children }) => {
  const [characterState, setCharacterState] = useState({
    hasCharacter: false,
    isLoaded: false,
    characters: [],
  });

  const _api = new api();

  const getCharacters = async (token) => {
    setCharacterState({ ...characterState, isLoaded: false });
    var characters = await (await _api.fetchCharacters(token)).data;
    
    setCharacterState({
      ...characterState,
      characters: characters,
      isLoaded: true,
    });
  };

  const value = {
    characterState,
    setCharacterState,
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
