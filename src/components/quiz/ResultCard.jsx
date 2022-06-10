import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizContext";
import { GET_RESULT, SET_QUESTION_NUMBER } from "../../reducer/constant";

export const ResultCard = ({ item }) => {
  const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuiz();
  const { category, questionNo, result, answerList } = quizState;

  const [activeOption, setActiveOption] = useState(false);

  const [bgColor, setBgColor] = useState("result-option-unit flex");

  console.log(answerList);

  const getResultBgColor = (option) => {
    if (option === item.ans) {
      setBgColor("result-option-unit active flex");
      return "active";
    } else if (option === answerList[item.question_no - 1]) {
      setBgColor("result-option-unit wrong-option flex");
      return "wrong-option";
    }
  };
  
  return (
    <div className="quiz-container">
      <div className="quiz-header flex font-md justify-between secondary-color">
        <p>
          <span className="primary-color font-header">Q</span>uestion:
          <span>{item.question_no}/5</span>
        </p>
      </div>
      <div className="quiz-question font-md black-color">{item.question}</div>
      <div className="quiz-option font-sm">
        {item.options.map((option, index) => (
          <div
            key={index}
            // *doubt* >>> className={`result-option-unit  ${() => getResultBgColor(option)} flex`}
            className={`result-option-unit ${
              option === item.ans
                ? "active"
                : option === answerList[item.question_no - 1]
                ? "wrong-option"
                : ""
            } flex`}
          >
            <span className="material-icons icon"> check </span>
            <p>{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
