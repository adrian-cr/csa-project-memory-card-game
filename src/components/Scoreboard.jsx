import React from "react";
import { useGameContext } from "../utils/GameContext.js";
import SetScore from "../utils/SetScore.js";

export default function Scoreboard() {
  /* STATE */
  const { state } = useGameContext();
  const score = SetScore(state.timer, state.attempts);

  /* COMPONENT */
  return (
    <div className={`scoreboard${state.gameOver? " game-over" : ""}`}>
      {state.gameOver && <h3 className="game-over-msg">Game over!</h3>}
      <div className="stats">
        <div>Attempts: {state.attempts}</div>
        <div>Score: {score}</div>
      </div>

    </div>
  );
}
