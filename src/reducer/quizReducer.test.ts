import { initialState } from "context/quizContext";
import {
  GET_CATEGORY,
  GET_RESULT,
  RESET_CATEGORY_GAME,
  RESET_DATA,
  SET_ANSWER_LIST,
  SET_QUESTION_NUMBER,
} from "./constant";
import { quizReducer } from "./quizReducer";
import { QuizAction } from "./quizReducer.types";

describe("testing quiz", () => {
  it("get the category of quiz", () => {
    const action: QuizAction = {
      type: GET_CATEGORY,
      payload: "sports",
    };

    const expectedState = {
      category: "sports",
      questionNo: 1,
      result: 0,
      answerList: [],
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("set the question number for quiz", () => {
    const action: QuizAction = {
      type: SET_QUESTION_NUMBER,
      payload: 2,
    };

    const expectedState = {
      category: "technology",
      questionNo: 2,
      result: 0,
      answerList: [],
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("Reset the data", () => {
    const action: QuizAction = {
      type: RESET_DATA,
    };

    const expectedState = {
      category: "technology",
      questionNo: 1,
      result: 0,
      answerList: [],
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("Reset category game", () => {
    const action: QuizAction = {
      type: RESET_CATEGORY_GAME,
    };

    const expectedState = {
      questionNo: 1,
      result: 0,
      answerList: [],
      category: "technology",
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("get result of quiz", () => {
    const action: QuizAction = {
      type: GET_RESULT,
      payload: 10,
    };

    const expectedState = {
      questionNo: 1,
      result: 10,
      answerList: [],
      category: "technology",
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("get the answer list given by user", () => {
    const action: QuizAction = {
      type: SET_ANSWER_LIST,
      payload: '5000',
    };

    const expectedState = {
      questionNo: 1,
      result: 0,
      answerList: ["5000"],
      category: "technology",
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
