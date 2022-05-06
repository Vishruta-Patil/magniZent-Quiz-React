import { useEffect } from "react"
import MainTitle from "../../components/common/mainTitle"
import { InstructionUnit } from "../../components/InstructionUnit"
import "./instruction.css"

export const Instructions = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div class="instruction-container">
           <MainTitle>Instructions</MainTitle>        
            <div class="instruction-inner-box secondary-color">
            <p className="font-md primary-color instruction-header font-header">Read the instruction properly before starting the quiz</p>
                <InstructionUnit>There are total 5 questions</InstructionUnit>
                <InstructionUnit>Each question is of 10 Points</InstructionUnit>
                <InstructionUnit>Every question has only one correct answer</InstructionUnit>
                <InstructionUnit>You need to score more than 75% to win the quiz</InstructionUnit>
                <a href="./quiz.html"
                ><button class="hero-btn quiz-btn">Let's Begin  the Quiz </button></a
                >
            </div>
        </div>
    )
}