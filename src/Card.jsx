import { useState } from 'react';
import './Card.css';

function Card({ char }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="card-wrapper">
      <img src={char.image} alt={char.name} />
      <p>{char.name}</p>
    </div>
  );
}

export default Card;
