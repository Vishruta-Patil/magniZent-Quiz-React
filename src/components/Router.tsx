import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { JsxElement } from "typescript";
import { LogIn } from "../pages/auth/login";
import { SignIn } from "../pages/auth/signin";
import Home from "../pages/home";
import { Instructions } from "../pages/instructionPage";
import { Quiz } from "../pages/quiz";
import { Result } from "../pages/result/result";
// import ProtectedRoute from "./ProtectedRoute";

export const Router = () => {
  
  const useAuth = () => {
    const user_data = sessionStorage.getItem("auth_Token");

    return user_data !== null;
  };

//   const [authStatus, setAuthStatus] = useState(useAuth())

  const PrivateRoute = ({ children } : {children: React.ReactNode | any}) => {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<LogIn />} />

      <Route
        path="/instructions"
        element={
          <PrivateRoute>
            <Instructions />
          </PrivateRoute>
        }
      />

      

      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};
