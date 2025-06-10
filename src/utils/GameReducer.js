export const initialState = {
  cards: [],
  selectedCards: [],
  matchedCards: [],
  attempts: 0,
  timer: 0,
  isRunning: false,
};

export default function GameReducer(state, action) {
  switch (action.type) {
    case 'SET_CARDS':
      return { ...state, cards: action.payload };
    case 'SELECT_CARD': {
      const updatedSelection = [...state.selectedCards, action.payload];
      return { ...state, selectedCards: updatedSelection };
    }
    case 'CHECK_MATCH': {
      const [first, second] = state.selectedCards;
      const firstCard = state.cards.find(card => card.uid === first);
      const secondCard = state.cards.find(card => card.uid === second);

      if (firstCard && secondCard && firstCard.id === secondCard.id) {
        return {
          ...state,
          matchedCards: [...state.matchedCards, first, second],
          selectedCards: [],
          attempts: state.attempts + 1,
        };
      } else {
        return {
          ...state,
          selectedCards: [],
          attempts: state.attempts + 1,
        };
      }
    }
    case 'RESET_GAME':
      return { ...initialState, cards: action.payload };
    case 'TICK':
      return { ...state, timer: state.timer + 1 };
    case 'START_TIMER':
      return { ...state, isRunning: true };
    case 'STOP_TIMER':
      return { ...state, isRunning: false };
    default:
      return state;
  }
}
