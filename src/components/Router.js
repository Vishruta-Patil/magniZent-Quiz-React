import {Routes, Route} from "react-router-dom";
import Home from "../pages/home";
import { Instructions } from "../pages/instructionPage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/instructions" element={<Instructions />}/>
            <Route path="/instructions" element={<Instructions />}/>
            
        </Routes>
    )
}