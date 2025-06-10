import React, { createContext, useReducer, useContext } from 'react';
import GameReducer, { initialState } from './GameReducer';

const GameContext = createContext();

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(GameReducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
