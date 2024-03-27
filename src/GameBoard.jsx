import { useState } from 'react';
import Card from './Card';
import initialAnimals from './initialAnimals';
import './GameBoard.css';

function GameBoard({ addScore, resetGame, cardReset }) {
  const [characters, setCharacters] = useState(initialAnimals);

  function randomizeOrder() {
    const newCharacters = [...characters];

    for (let i = 0; i < newCharacters.length; i += 1) {
      const randomPlace = Math.floor(Math.random() * newCharacters.length);
      [newCharacters[randomPlace], newCharacters[i]] = [
        newCharacters[i],
        newCharacters[randomPlace],
      ];
    }

    setCharacters(newCharacters);
  }

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
              randomizeOrder={randomizeOrder}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameBoard;
