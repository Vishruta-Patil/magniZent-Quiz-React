import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizContext";
import { GET_RESULT, SET_QUESTION_NUMBER } from "../../reducer/constant";


export const QuizCardFooter = ({item}) => {
  const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuiz();
  const { category, questionNo, result } = quizState;

  const prevLinkHandler = (prev) => {
    if (prev === "rules") {
      navigate("/instructions");
    } else {
      navigate(`/quiz/${questionNo}?${category}`);
      quizDispatch({ type: SET_QUESTION_NUMBER, payload: questionNo - 1 });
    }
  };

  const nextLinkHandler = (next) => {
    if (next === "result") {
      navigate("/result");
    } else if (questionNo < 5) {
      quizDispatch({ type: SET_QUESTION_NUMBER, payload: questionNo + 1 });
      navigate(`/quiz/${questionNo}?${category}`);
    }
  };

  return (
    <div className="quiz-footer font-sm secondary-color">
      <p onClick={() => prevLinkHandler(item.link.prev)}>
        <span className="black-color">&lt; </span>
        <span className="primary-color font-md">
          {item.link.prev[0].toUpperCase()}
        </span>
        {item.link.prev.slice(1)}
      </p>

      <p onClick={() => nextLinkHandler(item.link.next)}>
        <span className="primary-color font-md">
          {item.link.next[0].toUpperCase()}
        </span>
        {item.link.next.slice(1)}
        <span className="black-color">&#62; </span>
      </p>
    </div>
  );
};
