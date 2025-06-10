import React, { Suspense, lazy } from 'react';
import { GameProvider } from './utils/GameContext';
import Timer from './components/Timer';
import Scoreboard from './components/Scoreboard';
import "./App.css"

const Board = lazy(() => import('./components/Board'));

export default function App() {
  return (
    <GameProvider>
      <div className="app">
        <h1>Memory Card Game</h1>
        <Scoreboard />
        <Timer />
        <Suspense fallback={<div>Loading Game...</div>}>
          <Board />
        </Suspense>
      </div>
    </GameProvider>
  );
}
