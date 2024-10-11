import { index } from "d3";
import {
  DATARECEIVED,
  DATAFAILED,
  FINISH,
  NEWANSWER,
  NEXTQUESTION,
  RESTART,
  START,
} from "./actions";

export const intialState = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
  index: 0,
  answers: [],
};

export default function reducer(state, action) {
  switch (action.type) {
    case DATARECEIVED:
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        answers: new Array(action.payload.length).fill(null),
      };

    case DATAFAILED:
      return {
        ...state,
        status: "error",
      };
    case START:
      return {
        ...state,
        status: "active",
      };
    case NEWANSWER: {
      state.answers[state.index] = action.payload;
      return {
        ...state,
      };
    }
    case NEXTQUESTION:
      return {
        ...state,
        index: state.index + 1,
      };
    case FINISH:
      return {
        ...state,
        status: "finished",
      };
    case RESTART:
      return {
        ...intialState,
        questions: state.questions,
        status: "ready",
        index: 0,
        answers: new Array(state.questions.length).fill(null),
      };

    default:
      throw new Error("Action unknown");
  }
}
