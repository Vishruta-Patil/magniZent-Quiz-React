import React, { useContext } from "react";
import { AuthContext } from "../context/firebaseAuthContext";
import { Route, Navigate, Routes } from "react-router-dom";

export default function ProtectedRoute(props) {
  const authValue = useContext(AuthContext);
  if (authValue.userDataPresent) {
    if (authValue.user == null) {
      return <Navigate to={props.redirectTo}></Navigate>;
    } else {
      return (
        <Routes>
          <Route exact path={props.path}>
            {props.children}
          </Route>
        </Routes>
      );
    }
  } else {
    return null;
  }
}
