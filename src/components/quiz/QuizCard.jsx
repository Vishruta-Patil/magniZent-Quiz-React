import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizContext";
import {
  GET_RESULT,
  SET_QUESTION_NUMBER,
  SET_ANSWER_LIST,
} from "../../reducer/constant";

export const QuizCard = ({ item }) => {
  const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuiz();
  const { category, questionNo, result, answerList } = quizState;

  const [activeOption, setActiveOption] = useState(false);

  // const answerHandler = (option, index, e) => {
  //   e.target.style.color = "red"
  //   if(index === item.options.indexOf(option)) {
  //     setActiveOption(true)
  //     console.log("yess")
  //     answerHandler(option, index)
  //   }
  //   else {
  //     setActiveOption(false)
  //     console.log("no")
  //   }

  //   if (item.ans === option) {
  //     quizDispatch({type:GET_RESULT, payload: result + 1})
  //   } else {
  //     quizDispatch({type:GET_RESULT, payload: result})
  //   }
  // };

  

  const [timer, setTimer] = useState(30);
  // const [timerId, setTimerId] = useState("");

  // const timer1 = useRef(3);
  const timer2 = useRef(null);

  console.log( timer);

  useEffect(() => {
    timer2.current = setInterval(() => {
      setTimer(timer - 1);
      // timer1.current--;
    }, 1000);
    return () => clearInterval(timer2.current);
  }, [timer]);

  useEffect(() => {
    console.log("vishruta " + timer);
    if (timer <= 0) {
      clearInterval(timer2.current);
    }
  });


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

  const prevLinkHandler = (prev) => {
    if (prev === "rules") {
      navigate("/instructions");
    } 
    else {
      quizDispatch({ type: SET_QUESTION_NUMBER, payload: questionNo - 1 });
    }
  };

  const nextLinkHandler = (next) => {
    clearTimeout(timer2.current)
    if (next === "result") {
      navigate("/result");
    } else if (questionNo < 5) {
      setTimer(30)
      quizDispatch({ type: SET_QUESTION_NUMBER, payload: questionNo + 1 });
    }
  };

  const answerHandler = (e, option) => {
    // e.target.style.color = e.target.style.color === "red" ? "black" : "red";

    quizDispatch({ type: SET_ANSWER_LIST, payload: option });
    if (item.ans === option) {
      quizDispatch({ type: GET_RESULT, payload: result + 10 });
    } else {
      quizDispatch({ type: GET_RESULT, payload: result });
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
        {item.options.map((option, index) => (
          <div
            className={"option-unit flex"}
            key={index}
            // onClick={(e) => { e.target.style.color = "#0097a7"; answerHandler(option, index)}}
            onClick={(e) => answerHandler(e, option)}
            disabled={true}
          >
            {console.log("index ", index, " question no: ", item.question_no)}
            <span className="material-icons icon"> check </span>
            {option}
          </div>
        ))}
      </div>

      <div className="quiz-footer font-sm secondary-color">
        {/* <p onClick={() => prevLinkHandler(item.link.prev)}>
          <span className="black-color">&lt; </span>
          <span className="primary-color font-md">
            {item.link.prev[0].toUpperCase()}
          </span>
          {item.link.prev.slice(1)}
        </p> */}

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
