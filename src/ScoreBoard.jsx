import './ScoreBoard.css';

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className="score-board">
      <p>Score: {currentScore}</p>
      <p>High-Score: {highScore}</p>
    </div>
  );
}

export default ScoreBoard;
