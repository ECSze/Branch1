import React, { useState } from "react";
import "./AuthForm.css";
import backgroundImage from "/wingg.jpg"; // Ensure this path is valid

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="auth-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="auth-card">
        <h2>LOGIN</h2>
        <div className="auth-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <div className="auth-links">
            <a href="#">Forgot password?</a>
          </div>
          <button className="submit-btn">{isLogin ? "Login" : "Signup"}</button>
        </form>
        <p className="switch-text">
          {isLogin ? "Not a member?" : "Already have an account?"}{" "}
          <a href="#" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Signup now" : "Login"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
