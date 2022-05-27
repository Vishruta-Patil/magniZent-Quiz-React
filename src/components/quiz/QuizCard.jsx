import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizContext";
import { GET_RESULT, SET_QUESTION_NUMBER } from "../../reducer/constant";

export const QuizCard = ({ item }) => {
  const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuiz();
  const { category, questionNo, result } = quizState;

  const [activeOption, setActiveOption] = useState(false)

  const answerHandler = (option, index, e) => { 
    e.target.style.color = "red" 
    if(index === item.options.indexOf(option)) {
      setActiveOption(true)
      console.log("yess")
      answerHandler(option, index)
    }
    else {
      setActiveOption(false)
      console.log("no")
    }
    
    if (item.ans === option) {
      quizDispatch({type:GET_RESULT, payload: result + 1})
    } else {
      quizDispatch({type:GET_RESULT, payload: result})
    }
  };

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
    <div className="quiz-container">
      <div className="quiz-header flex font-md justify-between secondary-color">
        <p>
          <span className="primary-color font-header">Q</span>uestion:
          <span>{item.question_no}/5</span>
        </p>
        <p className="quit-option">Timer</p>
      </div>
      <div className="quiz-question font-md black-color">{item.question}</div>
      <div className="quiz-option font-sm" >
        {item.options.map((option, index) => (
          <div
            className={activeOption ? "option-unit active flex" : "option-unit flex"}
            key={index}
            // onClick={(e) => { e.target.style.color = "#0097a7"; answerHandler(option, index)}}
            onClick={() => {answerHandler(option, index)}}
          >
            <span className="material-icons icon"> check </span>
            <p>{option}</p>
          </div>
        ))}
      </div>

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
    </div>
  );
};
