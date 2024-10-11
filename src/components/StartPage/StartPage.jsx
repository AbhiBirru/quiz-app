import React from "react";
import "./StartPage.css";

const StartPage = ({ dispatch }) => {
  return (
    <div className="container">
      <div className="logo">
        <img alt="Upraised Logo" src="/assets/images/logo.svg" />
      </div>
      <div className="quiz-container">
        <h1 className="quiz-title">Quiz</h1>
      </div>
      <button
        className="start-button"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
};

export default StartPage;
