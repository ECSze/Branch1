import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Login Form</h2>
        <div className="auth-toggle">
          <button
            className={`auth-tab ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`auth-tab ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        <form>
          <input
            type="email"
            placeholder="Email Address"
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
          />
          {isLogin && <div className="auth-forgot">Forgot password?</div>}
          <button type="submit" className="auth-submit">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <>
              Not a member?{" "}
              <span className="auth-link" onClick={() => setIsLogin(false)}>
                Signup now
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span className="auth-link" onClick={() => setIsLogin(true)}>
                Login
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
