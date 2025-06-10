import { useEffect } from 'react';
import { useGameContext } from './GameContext';

export default function SetTimer() {
  const { state, dispatch } = useGameContext();

  useEffect(() => {
    let interval;
    if (state.isRunning) {
      interval = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state.isRunning, dispatch]);
}
