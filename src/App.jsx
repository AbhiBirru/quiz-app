import React, { useEffect, useReducer } from "react";
import StartPage from "./components/StartPage/StartPage";
import Question from "./components/Questions/Question";
import "./App.css";
import Main from "./AppMain";
import Loader from "./Loader";
import Error from "./Error";
import NextButton from "./components/Questions/NextButton";
import FinishedScreen from "./components/FinishedScreen/FinishedScreen";
import reducer, { intialState } from "./store/reducer";
import { DATAFAILED, DATARECEIVED } from "./store/actions";

const App = () => {
  const [{ questions, status, index, answers }, dispatch] = useReducer(
    reducer,
    intialState
  );
  const numQuestions = questions.length;

  useEffect(function () {
    fetch(`https://quiz-backend-challenge.vercel.app/api/questions`)
      .then((res) => res.json())
      .then((resjson) =>
        dispatch({ type: DATARECEIVED, payload: resjson.data.questions })
      )
      .catch((err) => dispatch({ type: DATAFAILED }));
  }, []);

  return (
    <div className="app-main">
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartPage dispatch={dispatch} />}

        {status === "active" && (
          <div className="questions-page">
            <Question
              question={questions[index]}
              dispatch={dispatch}
              selectedAnswer={answers[index]}
              numQuestions={numQuestions}
              index={index}
            />
            <div className="next">
              <NextButton dispatch={dispatch} answers={answers} index={index} />
            </div>
          </div>
        )}

        {status === "finished" && (
          <FinishedScreen
            dispatch={dispatch}
            answers={answers}
            questions={questions}
          />
        )}
      </Main>
    </div>
  );
};

export default App;
