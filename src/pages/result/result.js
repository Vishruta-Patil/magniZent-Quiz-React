import { QuizCard } from "../../components/quiz/QuizCard"
import { useQuiz } from "../../context/quizContext";

export const Result = () => {
    const { quizState } = useQuiz();
  const { result } = quizState;

    return (
        <div>
           {result}
        </div>
    )
}