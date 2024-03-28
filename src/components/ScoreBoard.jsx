import '../styles/ScoreBoard.css';
import congratulation from '../assets/congratulation.gif';

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className="score-board">
      {currentScore !== 20 ? (
        <>
          <p>Score: {currentScore}</p>
          <p>High-Score: {highScore}</p>
        </>
      ) : (
        <>
          <img src={congratulation} alt="Picture of all Odd Taxi characters" />
          <p>
            &quot;When someone asks me a question, I come up with about five
            possible answers. It takes time for me to choose the best answer
            that won&apos;t also offend anyone.&quot;
          </p>
        </>
      )}
    </div>
  );
}

export default ScoreBoard;
