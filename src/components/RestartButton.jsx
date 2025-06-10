import React, { forwardRef } from "react";
import { useGameContext } from "../utils/GameContext";
import ShuffleCards from "../utils/ShuffleCards";

const RestartButton = forwardRef((props, ref) => {
  /* STATE */
  const { state, dispatch } = useGameContext();
  const shuffledCards = ShuffleCards();
  const handleRestart = () => {
    dispatch({ type: "RESET_GAME", payload: shuffledCards });
    dispatch({ type: "START_TIMER" });
  };

  /* COMPONENT */
  return (
    state.gameOver &&
    <button ref={ref} onClick={handleRestart} className="restart-button">
      Restart Game
    </button>
  );
});

export default RestartButton;
