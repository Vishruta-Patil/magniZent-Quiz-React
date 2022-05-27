import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducer/quizReducer";

const QuizContext = createContext()
const useQuiz = () => useContext(QuizContext)


const QuizProvider = ({ children }) => {
    const initialState = {
        category: "technology",
        questionNo: 1,
        result: 0,
    }
    const [quizState, quizDispatch] = useReducer(quizReducer, initialState)

    return (
        <QuizContext.Provider value = {{ quizState, quizDispatch }}>
            {children}
        </QuizContext.Provider>
    )
}

export { useQuiz, QuizProvider }