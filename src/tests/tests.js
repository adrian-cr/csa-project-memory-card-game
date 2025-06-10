gameReducer.test.js
import gameReducer, { initialState } from '../utils/GameReducer';

test('should handle SET_CARDS', () => {
  const cards = [{ id: '1', uid: '1-1' }, { id: '1', uid: '2-1' }];
  const action = { type: 'SET_CARDS', payload: cards };
  const result = gameReducer(initialState, action);
  expect(result.cards).toEqual(cards);
});

test('should handle SELECT_CARD', () => {
  const action = { type: 'SELECT_CARD', payload: '1-1' };
  const result = gameReducer(initialState, action);
  expect(result.selectedCards).toContain('1-1');
});

test('should handle CHECK_MATCH with a match', () => {
  const state = {
    ...initialState,
    cards: [
      { id: '1', uid: 'a' },
      { id: '1', uid: 'b' }
    ],
    selectedCards: ['a', 'b'],
  };
  const result = gameReducer(state, { type: 'CHECK_MATCH' });
  expect(result.matchedCards).toContain('a');
  expect(result.matchedCards).toContain('b');
  expect(result.selectedCards).toEqual([]);
});

test('should handle TICK', () => {
  const state = { ...initialState, timer: 5 };
  const result = gameReducer(state, { type: 'TICK' });
  expect(result.timer).toBe(6);
});

test('should handle RESET_GAME', () => {
  const state = { ...initialState, timer: 10, attempts: 5 };
  const result = gameReducer(state, { type: 'RESET_GAME', payload: [] });
  expect(result.timer).toBe(0);
  expect(result.attempts).toBe(0);
});
