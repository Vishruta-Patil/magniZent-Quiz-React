import "./quiz.css"

export const Questions = () => {
    return (
        <div className="quiz-container">

            <div className="quiz-header flex font-md justify-between secondary-color">
                <p><span className="primary-color font-header">Q</span>uestion: <span>5/5</span></p>
                <p className="quit-option">Timer</p>
            </div>
            <div className="quiz-question font-md black-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ab.</div>
            <div className="quiz-option font-sm">
                <div className="option-unit flex">
                    <span className="material-icons icon"> check </span>
                    <p >Lorem ipsum</p>
                </div>
                <div className="option-unit flex">
                    <span className="material-icons icon"> check </span>
                    <p >Lorem ipsum</p>
                </div>
                <div className="option-unit flex">
                    <span className="material-icons icon"> check </span>
                    <p >Lorem ipsum</p>
                </div>
                <div className="option-unit flex">
                    <span className="material-icons icon"> check </span>
                    <p >Lorem ipsum</p>
                </div>
            </div>

            <div className="quiz-footer font-sm primary-color">
                <p> <span className="secondary-color">&lt;</span> Quit Quiz</p>
                <p>Next Question <span className="secondary-color">&#62;</span></p>
            </div>
        </div>

    )
}