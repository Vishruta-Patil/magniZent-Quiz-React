import {Routes, Route} from "react-router-dom";
import Home from "../pages/home";
import { Instructions } from "../pages/instructionPage";
import { Quiz } from "../pages/quiz";
import { Result } from "../pages/result/result";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/instructions" element={<Instructions />}/>
            <Route path="/quiz/:question" element={<Quiz />}/> 
            <Route path="/result" element={<Result />}/> 
            
        </Routes>
    )
}