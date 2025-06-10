import React from "react";
import { useGameContext } from "../utils/GameContext";
import SetTimer from "../utils/SetTimer";

export default function Timer() {
  /* STATE */
  const { state } = useGameContext();
  const mins = Math.floor(state.timer / 60);
  const secs = state.timer % 60;

  /* SIDE EFFECTS */
  SetTimer();

  /* COMPONENT */
  return <div className="timer">{mins<10 && "0"}{mins}:{secs<10 && "0"}{secs}</div>;
}
