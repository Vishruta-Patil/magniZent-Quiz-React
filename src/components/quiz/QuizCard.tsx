import { Question } from "data/quizData/quizData.types";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizContext";
import {
  GET_RESULT,
  SET_QUESTION_NUMBER,
  SET_ANSWER_LIST,
} from "../../reducer/constant";

export const QuizCard = ({ item } : {item: Question}) => { 
  const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuiz();
  const { questionNo, result } = quizState;

  const [selectedAnswer, setSelectedAnswer] = useState("")

  const [timer, setTimer] = useState(30);
  // const [timerId, setTimerId] = useState("");
  // const timer1 = useRef(3);
  let timer2 = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timer2.current  = setInterval(() => {
      setTimer(timer - 1);
      // timer1.current--;
    }, 1000);
    return () => clearInterval(timer2.current as NodeJS.Timeout);
  }, [timer]);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timer2.current as NodeJS.Timeout);
    }
  });


  // *****Another approach to do same*****
  // const [remaining, setRemaining] = useState(
  //   3
  // );
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (remaining === 0) {
  //       clearTimeout(timer);
  //     } else {
  //       setRemaining((prev) => prev - 1);
  //     }
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, [remaining]);

  // setTimerId(setInterval(() => {
  //   if(timer <= 0) {
  //     clearInterval(timerId)
  //   }
  //   setTimer(timer-1)
  // }, 1000))

  const nextLinkHandler = (next: string) => {
    quizDispatch({ type: SET_ANSWER_LIST, payload: selectedAnswer });
    if (item.ans === selectedAnswer) {
      quizDispatch({ type: GET_RESULT, payload: result + 10 });
    } else {
      quizDispatch({ type: GET_RESULT, payload: result });
    }

    setSelectedAnswer("")
    clearTimeout(timer2.current as NodeJS.Timeout)
    if (next === "result") {
      navigate("/result");
    } else if (questionNo < 5) {
      setTimer(30)
      quizDispatch({ type: SET_QUESTION_NUMBER, payload: questionNo + 1 });
    }
  };

  useEffect(() => {
    if (timer===0 && questionNo >= 5) {
      navigate("/result");
    }
    else if(timer===0) {
      setTimer(30)
      quizDispatch({ type: SET_QUESTION_NUMBER, payload: questionNo + 1 });
    }
  }, [timer])


  return (
    <div className="quiz-container">
      <div className="quiz-header flex font-md justify-between secondary-color">
        <p>
          <span className="primary-color font-header">Q</span>uestion:
          <span>{item.question_no}/5</span>
        </p>
        <p className={`quit-option flex-center ${timer<=10 ? "active" : ""}`}>
        <span className="material-icons icon time-icon"> schedule </span>
          {timer} sec</p>
      </div>
      <div className="quiz-question font-md black-color">{item.question}</div>
      <div className="quiz-option font-sm">
        {item.options.map((option:string, index:number) => (
          <div
            className={selectedAnswer === option ? "option-unit active flex" : "option-unit flex"}
            key={index}
            onClick={() => setSelectedAnswer(option)}
            // disabled={true}
          >
            <span className="material-icons icon"> check </span>
            {option}
          </div>
        ))}
      </div>

      <div className="quiz-footer font-sm secondary-color">
        <p onClick={() => navigate("/")}>
          <span className="primary-color font-md">
            Q
          </span>
          uit Quiz
        </p>

        <p onClick={() => nextLinkHandler(item.link.next)}>
          <span className="primary-color font-md">
            {item.link.next[0].toUpperCase()}
          </span>
          {item.link.next.slice(1)}
          <span className="black-color">&#62; </span>
        </p>
      </div>
    </div>
  );
};
