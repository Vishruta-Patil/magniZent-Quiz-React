import "./quiz.css";
import { quizData } from "../../data/quizData/quizData";
import { QuizCard } from "../../components/quiz/QuizCard";
import { useQuiz } from "../../context/quizContext";

export const Quiz = () => {
    const {quizState} = useQuiz()
    const {category, questionNo} = quizState
    
  return (
    <div>
        <QuizCard item={(quizData as any)[category][questionNo-1]} />
    </div>
  );
};
