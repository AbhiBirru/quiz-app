import React from "react";
import "./FinishedScreen.css";
import { RESTART } from "../../store/actions";

const FinishedScreen = ({ dispatch, answers, questions }) => {
  const result = answers.reduce(
    (acc, val, index) => {
      const correctIndex = questions[index].correctOption;
      if (val === questions[index].options[correctIndex]) {
        return {
          correct: acc.correct + 1,
          wrong: acc.wrong,
        };
      }
      return {
        correct: acc.correct,
        wrong: acc.wrong + 1,
      };
    },
    {
      correct: 0,
      wrong: 0,
    }
  );
  const total = result.correct + result.wrong;
  const percentage = total > 0 ? Math.round((result.correct / total) * 100) : 0;

  return (
    <div className="finished">
      <p className="result">Your Result</p>
      <div className="speedometer-main">
        <div class="speedometer">
          <div class="gauge"></div>
          <div
            className="needle"
            style={{
              transform: `translateX(-50%) rotate(${percentage * 1.8 - 90}deg)`,
            }}
          ></div>
          <div class="percentage">{percentage}%</div>
        </div>
      </div>
      <div className="status-container">
        <div className="status-card correct">
          <span className="status-icon correct-icon"></span>
          <span className="status-text">
            <strong>{result.correct}</strong> Correct
          </span>
        </div>
        <div className="status-card incorrect">
          <span className="status-icon incorrect-icon"></span>
          <span className="status-text">
            <strong>{result.wrong}</strong> Incorrect
          </span>
        </div>
      </div>
      <div className="next">
        <button
          className="restart-btn"
          onClick={() => dispatch({ type: RESTART })}
        >
          Start Again
        </button>
      </div>
    </div>
  );
};

export default FinishedScreen;
