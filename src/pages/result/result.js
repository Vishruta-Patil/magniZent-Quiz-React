import { QuizCard } from "../../components/quiz/QuizCard";
import { ResultCard } from "../../components/quiz/ResultCard";
import { useQuiz } from "../../context/quizContext";
import { quizData } from "../../data/quizData";

export const Result = () => {
  const { quizState } = useQuiz();
  const { result, category } = quizState;

  return (
    <div>
      <h1 className="flex-center font-header md-gutter">Your Score is &nbsp; <span className="primary-color">{result}</span></h1>
      {quizData[category].map((item, index) => (
        <ResultCard item={item} />
      ))}
    </div>
  );
};
