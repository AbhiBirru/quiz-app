import { NEWANSWER } from "../../store/actions";
import "./Questions.css";

const Options = ({ question, dispatch, selectedAnswer }) => {
  return (
    <div className="options">
      {question.options.map((option) => (
        <label
          htmlFor={option}
          className={`btn btn-option 
            ${option === selectedAnswer ? "selected" : ""}
          `}
          key={option}
          onClick={() => dispatch({ type: NEWANSWER, payload: option })}
        >
          <div className="option">
            <input
              id={option}
              checked={option === selectedAnswer}
              type="radio"
              name="option"
            ></input>
            {option === selectedAnswer && <span>&#10004;</span>}
          </div>
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default Options;
