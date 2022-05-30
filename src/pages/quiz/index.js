import "./quiz.css";
import { quizData } from "../../data/quizData";
import { QuizCard } from "../../components/quiz/QuizCard";
import { useQuiz } from "../../context/quizContext";
import { useParams } from "react-router-dom";

export const Quiz = () => {
    const {quizState} = useQuiz()
    const {category, questionNo} = quizState

    const {question} = useParams()
    console.log(question)
    
  return (
    <div>
      {/* {quizData[category].map((item, index) => ( */}
        <QuizCard item={quizData[category][questionNo-1]} />
      {/* ))} */}
    </div>
  );
};
