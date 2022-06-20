import { useEffect } from "react"
import { Link } from "react-router-dom"
import MainTitle from "../../components/common/mainTitle"
import { InstructionUnit } from "../../components/InstructionUnit"
import { useQuiz } from "../../context/quizContext"
import { RESET_DATA } from "../../reducer/constant"
import "./instruction.css"

export const Instructions = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className="instruction-container">
           <MainTitle>Instructions</MainTitle>        
            <div className="instruction-inner-box secondary-color">
            <p className="font-md primary-color instruction-header">Read the instruction properly before starting the quiz</p>
                <InstructionUnit>There are total 5 questions</InstructionUnit>
                <InstructionUnit>Each question is of 10 Points</InstructionUnit>
                <InstructionUnit>Every question has only one correct answer</InstructionUnit>
                <InstructionUnit>You get 30 seconds to answer each question</InstructionUnit>
                <InstructionUnit>You cannot go back to the previous question.</InstructionUnit>
                <InstructionUnit>You need to score more than 60% to win the quiz</InstructionUnit>

                <Link to= {`/quiz`}
                ><button className="hero-btn quiz-btn" >Let's Begin the Quiz </button></Link
                >
            </div>
        </div>
    )
}