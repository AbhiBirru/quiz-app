import React from "react";
import "./Questions.css";
import { FINISH, NEXTQUESTION } from "../../store/actions";

const NextButton = ({ dispatch, answers, index }) => {
  return (
    <button
      className="next-btn"
      disabled={!answers[index]}
      onClick={() =>
        dispatch({
          type: index === answers.length - 1 ? FINISH : NEXTQUESTION,
        })
      }
    >
      <span className="btn-text">Next</span>
      <span className="btn-icon">
        <img src="/assets/images/arrow.svg" alt="Next arrow" />
      </span>
    </button>
  );
};

export default NextButton;
