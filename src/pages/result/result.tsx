import { CategoryInterface } from "data/categoryData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ResultCard } from "../../components/quiz/ResultCard";
import { useQuiz } from "../../context/quizContext";
import { quizData } from "../../data/quizData/quizData";
import { RESET_CATEGORY_GAME } from "../../reducer/constant";
import { Question, QuizDataType } from "data/quizData/quizData.types";

export const Result = () => {
  const { quizState, quizDispatch } = useQuiz();
  const { result, category } = quizState;

  const [resultMsg, setResultMsg] = useState("");

  useEffect(() => {
    window.scrollTo(0,0)
    let resultPercent = (result * 100) / 50;
    if (resultPercent >= 60) {
      setResultMsg("Woah!! You Won :)");
    } else {
      setResultMsg("Better luck next time :(");
    }
  }, [result]);

  const resetQuiz = () => {
    quizDispatch({type: RESET_CATEGORY_GAME})
  }

  return (
    <div style={{position:"relative"}}>
      <div>
        <h1 className="flex-center font-header md-gutter">
          Your Score is &nbsp; <span className="primary-color">{result}</span>
        </h1>
        <h1 className="flex-center primary-color font-md md-gutter">
          {resultMsg}
        </h1>
      </div>
      
      <Link to={`/instructions`} style={{position:"absolute", right: "20px", top: 0}}>
        <button className="btn hero-btn" onClick={resetQuiz}>Play Again</button>
      </Link>

      {(quizData as any)[category].map((item: CategoryInterface, index: number) => (  //doubt
        <ResultCard item={item} />
      ))}
    </div>
  );
};
