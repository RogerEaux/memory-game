import { useState } from 'react';
import Card from './Card';
import initialAnimals from './initialAnimals';

function GameBoard() {
  const [characters, setCharacters] = useState(initialAnimals);

  return (
    <>
      <ul className="card-grid">
        {characters.map((char) => (
          <li key={char.name}>
            <Card char={char} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameBoard;
