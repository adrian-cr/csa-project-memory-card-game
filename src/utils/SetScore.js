import { useMemo } from 'react';

export default function SetScore(timer, attempts) {
  return useMemo(() => {
    if (!attempts) return 0;
    return Math.max(1000 - timer * 2 - attempts * 5, 0);
  }, [timer, attempts]);
}
