import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const CharacterContext = createContext({});

const CharacterProvider = ({ children }) => {
  const [characterState, setCharacterState] = useState({
    isLoaded: false,
    characters: [],
  });

  const _api = new api();

  const getCharacters = async (token, page = 1) => {
    setCharacterState({ ...characterState, isLoaded: false });
    var _characters = await (await _api.fetchCharacters(token, page)).data;
    if (page === 1)
      setCharacterState({
        ...characterState,
        characters: _characters,
        isLoaded: true,
      });
    else
      setCharacterState({
        ...characterState,
        characters: _characters,
        isLoaded: true,
      });
  };

  const value = {
    characterState,
    setCharacterState,
    getCharacters: useCallback((token, page) => {
      getCharacters(token, page);
    }, []),
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
