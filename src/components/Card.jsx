import { useEffect, useState } from 'react';
import '../styles/Card.css';

function Card({ char, addScore, resetGame, cardReset, randomizeOrder }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (!clicked) {
      setClicked(true);
      addScore();
    } else {
      resetGame();
    }
    randomizeOrder();
  }

  useEffect(() => {
    if (cardReset) {
      setClicked(false);
    }
  }, [cardReset]);

  return (
    <button className="card-wrapper" onClick={handleClick}>
      <img src={char.image} alt="" />
      <p>{char.name}</p>
    </button>
  );
}

export default Card;
