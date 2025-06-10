import React, { Suspense, lazy, useRef } from 'react';
import { GameProvider } from './utils/GameContext';
import Timer from './components/Timer';
import Scoreboard from './components/Scoreboard';
import ErrorBoundary from './components/ErrorBoundary';
import RestartButton from './components/RestartButton';
import "./App.css"

const Board = lazy(() => import('./components/Board'));

export default function App() {
  const restartButtonRef = useRef(null);

  return (
    <GameProvider>
      <ErrorBoundary>
        <div className="app">
          <h1 className="app-title">Memory Card Game</h1>
          <Scoreboard />
          <Timer />
          <Suspense fallback={<div>Loading Game...</div>}>
            <Board />
          </Suspense>
          <RestartButton ref={restartButtonRef} />
        </div>
      </ErrorBoundary>
    </GameProvider>
  );
}
