import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./auth.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

export const LogIn = () => {
  const [credentials, setCredentials] = useState({});
  let navigate = useNavigate();

  const loginUser = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      sessionStorage.setItem('auth_Token', user._tokenResponse.refreshToken)
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }
  
  return (
    <div className="login-container flex-column">
      <h2 className="main-header">LOGIN</h2>
      <input
        type="email"
        className="input-box"
        placeholder="Enter your email"
        onChange={(e) => {
          setCredentials({ ...credentials, email: e.target.value });
        }}
      />
      <input
        type="password"
        className="input-box"
        placeholder="Enter your password"
        onChange={(e) => {
          setCredentials({ ...credentials, password: e.target.value });
        }}
      />
      <div className="terms-container flex">
        <input id="terms-input" type="checkbox" />
        <label htmlFor="terms-input">I accept all the terms and conditions</label>
      </div>

      <button className="hero-btn" onClick={() => loginUser(credentials.email, credentials.password)}>
        Login
      </button>
      <button className="outline-btn" onClick={() => loginUser("test@123.com", "test123")}>
        Login With Guest Credentials
      </button>
      <p className="gen-msg">
        Dont have an account,
        <Link className="primary-color" to="/signin">
          Sign In!
        </Link>
      </p>
    </div>
  );
};
