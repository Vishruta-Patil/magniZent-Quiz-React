import { QuizState, QuizAction } from "reducer/quizReducer.types"

export type QuizContextType = {
    quizState: QuizState,
    quizDispatch: (arg0: QuizAction) => void;
}