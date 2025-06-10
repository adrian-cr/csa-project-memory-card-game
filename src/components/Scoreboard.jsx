import React from 'react';
import { useGameContext } from '../utils/GameContext.js';
import SetScore from '../utils/SetScore.js';

export default function Scoreboard() {
  const { state } = useGameContext();
  const score = SetScore(state.timer, state.attempts);

  return (
    <div className="scoreboard">
      <div>Attempts: {state.attempts}</div>
      <div>Score: {score}</div>
    </div>
  );
}
