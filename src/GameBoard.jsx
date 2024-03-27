import { useState } from 'react';
import Card from './Card';
import initialAnimals from './initialAnimals';
import './GameBoard.css';

function GameBoard({ addScore, resetGame, cardReset }) {
  const [characters, setCharacters] = useState(initialAnimals);

  return (
    <>
      <ul className="card-grid">
        {characters.map((char) => (
          <li key={char.name}>
            <Card
              char={char}
              addScore={addScore}
              resetGame={resetGame}
              cardReset={cardReset}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameBoard;
