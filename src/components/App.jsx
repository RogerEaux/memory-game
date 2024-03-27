import { useState } from 'react';
import '../styles/App.css';
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardReset, setCardReset] = useState(false);

  function addScore() {
    setCurrentScore(currentScore + 1);
    if (currentScore + 1 > highScore) {
      setHighScore(currentScore + 1);
    }
    setCardReset(false);
  }

  function resetGame() {
    setCurrentScore(0);
    setCardReset(true);
  }

  return (
    <>
      <header>
        <h1>MEMORY GAME</h1>
        <ScoreBoard currentScore={currentScore} highScore={highScore} />
      </header>
      <main>
        <GameBoard
          currentScore={currentScore}
          addScore={addScore}
          resetGame={resetGame}
          cardReset={cardReset}
        />
      </main>
      <div
        className={currentScore === 10 || currentScore === 0 ? 'fade' : null}
      ></div>
    </>
  );
}

export default App;
