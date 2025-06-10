import React, { useEffect } from 'react';
import { useGameContext } from '../utils/GameContext.js';
import ShuffleCards from '../utils/ShuffleCards.js';
import Card from './Card';

export default function Board() {
  const { state, dispatch } = useGameContext();
  const shuffledCards = ShuffleCards();

  useEffect(() => {
    dispatch({ type: 'SET_CARDS', payload: shuffledCards });
    dispatch({ type: 'START_TIMER' });
  }, [dispatch, shuffledCards]);

  useEffect(() => {
    if (state.selectedCards.length === 2) {
      const timeout = setTimeout(() => {
        dispatch({ type: 'CHECK_MATCH' });
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [state.selectedCards, dispatch]);

  return (
    <div className="game-board">
      {state.cards.map((card) => (
        <Card key={card.uid} card={card} />
      ))}
    </div>
  );
}
