import "./Questions.css";
import Options from "./Options";
import Progress from "../Progress/Progress";

const Question = ({
  question,
  dispatch,
  selectedAnswer,
  numQuestions,
  index,
}) => {
  return (
    <div className="full-screen-container">
      <div className="top-image-container">
        <img src="/assets/images/quiz-top-bg.svg" alt="Quiz Background" />
      </div>
      <div className="main-content-container">
        <div className="progress-main">
          <Progress index={index} numQuestions={numQuestions} />
        </div>
        <h4 className="question">{question.question}</h4>
        <Options
          question={question}
          dispatch={dispatch}
          selectedAnswer={selectedAnswer}
        />
      </div>
    </div>
  );
};

export default Question;
