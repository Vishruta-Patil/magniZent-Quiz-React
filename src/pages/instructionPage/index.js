import { useEffect } from "react"
import { Link } from "react-router-dom"
import MainTitle from "../../components/common/mainTitle"
import { InstructionUnit } from "../../components/InstructionUnit"
import { useQuiz } from "../../context/quizContext"
import { SET_QUESTION_NUMBER } from "../../reducer/constant"
import "./instruction.css"

export const Instructions = () => {
    const {quizState, quizDispatch} = useQuiz()
    const {category, questionNo} = quizState
    
    useEffect(() => {
        window.scrollTo(0,0)
        // quizDispatch({type: SET_QUESTION_NUMBER})
    }, [])

    return (
        <div class="instruction-container">
           <MainTitle>Instructions</MainTitle>        
            <div class="instruction-inner-box secondary-color">
            <p className="font-md primary-color instruction-header">Read the instruction properly before starting the quiz</p>
                <InstructionUnit>There are total 5 questions</InstructionUnit>
                <InstructionUnit>Each question is of 10 Points</InstructionUnit>
                <InstructionUnit>Every question has only one correct answer</InstructionUnit>
                <InstructionUnit>You need to score more than 75% to win the quiz</InstructionUnit>
                <Link to= {`/quiz/${questionNo}?${category}`}
                ><button class="hero-btn quiz-btn" >Let's Begin  the Quiz </button></Link
                >
            </div>
        </div>
    )
}