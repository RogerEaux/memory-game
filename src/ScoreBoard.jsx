function ScoreBoard({ currentScore, highScore }) {
  return (
    <>
      <p>Score: {currentScore}</p>
      <p>High-Score: {highScore}</p>
    </>
  );
}

export default ScoreBoard;
