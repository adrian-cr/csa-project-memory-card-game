import { useMemo } from 'react';
import cards from '../data/cards.json';

export default function ShuffleCards() {
  return useMemo(() => {
    const duplicated = [...cards, ...cards].map((card, index) => ({ ...card, uid: index + '-' + card.id }));
    for (let i = duplicated.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [duplicated[i], duplicated[j]] = [duplicated[j], duplicated[i]];
    }
    return duplicated;
  }, []);
}
