import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducer/quizReducer";
import { QuizState, QuizAction } from "reducer/quizReducer.types";
import { QuizContextType } from "./quixContext.types";

const QuizContext = createContext<QuizContextType>({} as QuizContextType);
const useQuiz = () => useContext(QuizContext)

export const initialState : QuizState = {
    category: "technology",
    questionNo: 1,
    result: 0,
    answerList: [],
}

const QuizProvider = ({ children } : { children: React.ReactNode }) => {
    const [quizState, quizDispatch] = useReducer(quizReducer, initialState)

    return (
        <QuizContext.Provider value = {{ quizState, quizDispatch }}>
            {children}
        </QuizContext.Provider>
    )
}

export { useQuiz, QuizProvider }