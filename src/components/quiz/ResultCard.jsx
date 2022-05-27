import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizContext";
import { GET_RESULT, SET_QUESTION_NUMBER } from "../../reducer/constant";

export const ResultCard = ({ item }) => {
  const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuiz();
  const { category, questionNo, result } = quizState;

  const [activeOption, setActiveOption] = useState(false)

 

  return (
    <div className="quiz-container">
      <div className="quiz-header flex font-md justify-between secondary-color">
        <p>
          <span className="primary-color font-header">Q</span>uestion:
          <span>{item.question_no}/5</span>
        </p>
      </div>
      <div className="quiz-question font-md black-color">{item.question}</div>
      <div className="quiz-option font-sm" >
        {item.options.map((option, index) => (
          <div
            className={option === item.ans ? "result-option-unit active flex" : "result-option-unit flex"}
            key={index}
          >
            <span className="material-icons icon"> check </span>
            <p>{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
