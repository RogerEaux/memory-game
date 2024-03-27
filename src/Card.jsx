import { useEffect, useState } from 'react';
import './Card.css';

function Card({ char, addScore, resetGame, cardReset }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (!clicked) {
      setClicked(true);
      addScore();
    } else {
      resetGame();
    }
  }

  return (
    <div className="card-wrapper" onClick={handleClick}>
      <img src={char.image} alt={char.name} />
      <p>{char.name}</p>
    </div>
  );
}

export default Card;
