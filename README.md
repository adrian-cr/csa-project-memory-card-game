# Project: Memory Card Game
This project is a fully interactive card-matching game built with `React` designed to showcase advanced features such as `Context API`, `useReducer()`, lazy loading, error boundaries, performance optimizations, and unit testing.

## Features
* **Dynamic 4x4 Game Board**: Randomly shuffled cards, always presented in a 4x4 grid layout.
* **State Management with `Context API`**: Global game states like selected cards, matches, attempts, and timer
* **`useReducer()` for Complex Logic**: Centralized and structured state updates through clear action types
* **Card Interaction Logic**: Flip animations, match validation, and delay-based card reset
* **Timer and Scoreboard**: Time tracking and score computation
* **Performance Optimization**: Uses `React.memo`, `useCallback`, and `useMemo` to avoid unnecessary re-renders.
* **Custom Hooks**: Modular game logic including card shuffling, timer control, and scoring
* **Error Handling**: Error boundary implementation with fallback components
* **Responsive Design**: Adjustable layout for smaller screens using CSS Grid and media queries
* **Code Splitting**: Implementation of `React.lazy` and `Suspense` for async component loading
* **DOM Interaction with `useRef()`**: Direct access to DOM elements for UX improvements.
* **Unit Testing**: Simple Jest tests for key reducer actions.

## Technologies Used
* HTML5
* CSS3
* JavaScript (ES6)
* React
* Jest (for testing)

## React Components
THe project is made up of the following element components:
### 1. `App`
**Main wrapper component that initializes the app.**
* Wraps the game in a context provider.
* Includes error boundary, lazy-loaded game board, scoreboard, timer, and restart button.

### 2. `Board`
**Displays the grid of memory cards.**
* Uses a consistent 4x4 layout.
* Maps shuffled cards into individual `Card` components.

### 3. `Card`
**Represents a single memory card with flip behavior.**
* Flips on click.
* Dispatches `SELECT_CARD` action to context.
* Uses `CSS` animations for flip and hover effects.

### 4. `Scoreboard`
**Displays current score information.**
* Shows number of attempts.
* Dynamically updates as the game progresses.

### 5. `Timer`
**Tracks the duration of the game.**
* Starts and stops using game state.
* Displays time in seconds.

### 6. `RestartButton`
**Resets the game with a fresh set of cards.**
* Uses `useShuffleCards` to reinitialize cards.
* Dispatches `RESET_GAME` and `START_TIMER`.
* Uses `useRef` to manage focus.

### 7. `ErrorBoundary`
**Catches runtime errors and displays a fallback UI.**
* Prevents app crash from unhandled errors.
* Wraps critical components.

In addition, the following components are used for greater modularization:
### `ShuffleCards`
**Generates a shuffled array of card objects.**
* Ensures randomized pairing of cards for each game session.

### `SetTimer`
**Custom hook to manage timer logic.**
* Starts/stops based on game state.
* Uses `setInterval()` with cleanup.

### `SetScore`
**Calculates score from attempts and time.**
* Can be extended for more complex scoring formulas.

### `GameReducer`
**Implements useReducer() for more structured state management.**

It handles the following action types:
* `SET_CARDS`: Loads initial shuffled card set.
* `SELECT_CARD`: Updates selected cards array.
* `CHECK_MATCH`: Checks and marks matched cards.
* `RESET_GAME`: Resets all state to start a new game.
* `TICK`: Increments timer.
* `START_TIMER`: Starts timer on game begin.
* `STOP_TIMER`: Stops timer on game over.

### `GameContext`
**Defines the application's global state management structure.**
* Wraps the main app to make state accessible throughout the component tree.
* Enables components to consume and update game state without prop drilling.
* Integrates with `useReducer()` for predictable state transitions.

## Getting Started
1. **Clone the repository:**
```bash
git clone https://github.com/adrian-cr/csa-project-memory-card-game.git
cd csa-project-memory-card-game
```
2. **Install dependencies:**
```bash
npm install
```
3. **Start the development server:**
```bash
npm start
```
This will open the app at [http://localhost:3000](http://localhost:3000) in your browser.
