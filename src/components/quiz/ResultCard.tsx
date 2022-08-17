import { Question, ResultType } from "data/quizData/quizData.types";
import { useState } from "react";
import { useQuiz } from "../../context/quizContext";

export const ResultCard = ({ item } : {item: ResultType | any}) => {
  const { quizState } = useQuiz();
  const { answerList } = quizState;

  const [bgColor, setBgColor] = useState("result-option-unit flex");

  const getResultBgColor = (option : string) => {
    if (option === item.ans) {
      setBgColor("result-option-unit active flex");
      return "active";
    } else if (option === answerList[item.question_no - 1]) {
      setBgColor("result-option-unit wrong-option flex");
      return "wrong-option";
    }
  };

  console.log(item)

  return (
    <div className="quiz-container">
      <div className="quiz-header flex font-md justify-between secondary-color">
        <div className="flex">
          <div>
            <span className="primary-color font-header">Q</span>uestion:
            <span>{item.question_no}/5</span>
          </div>
          {answerList[item.question_no - 1] === "" && (
            <p className="not-selected-option font-sm">Option not selected</p>
          )}
        </div>
      </div>
      <div className="quiz-question font-md black-color">{item.question}</div>
      <div className="quiz-option font-sm">
        {item.options.map((option:string, index:number) => (
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
