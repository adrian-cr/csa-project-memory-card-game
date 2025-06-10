import React, { useCallback } from 'react';
import { useGameContext } from '../utils/GameContext';

  const Card = React.memo(({ card }) => {
  const { state, dispatch } = useGameContext();
  const isFlipped = state.selectedCards.includes(card.uid) || state.matchedCards.includes(card.uid);
  const isDisabled = state.selectedCards.length === 2 || isFlipped;

  const handleClick = useCallback(() => {
    if (!isDisabled) {
      dispatch({ type: 'SELECT_CARD', payload: card.uid });
    }
  }, [dispatch, card.uid, isDisabled]);

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back">
          <img src={card.image} alt="" />
        </div>
      </div>
    </div>
  );
});

export default Card;
