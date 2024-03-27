import '../styles/ScoreBoard.css';

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className="score-board">
      {currentScore !== 20 ? (
        <>
          <p>Score: {currentScore}</p>
          <p>High-Score: {highScore}</p>
        </>
      ) : (
        <p>You win!</p>
      )}
    </div>
  );
}

export default ScoreBoard;
