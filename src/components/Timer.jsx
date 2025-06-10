import React from 'react';
import { useGameContext } from '../utils/GameContext';
import SetTimer from '../utils/SetTimer';

export default function Timer() {
  const { state } = useGameContext();
  SetTimer();
  return <div className="timer">Time: {state.timer}s</div>;
}
