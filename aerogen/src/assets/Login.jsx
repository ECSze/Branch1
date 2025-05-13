import React, { useState } from "react";
import "./Login.css";


function Login ()  {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section style={{ padding: "60px 0" }}>
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-heading">Log in</h2>
        <div className="login-left">
          <h3>Not a Aerogen Member?</h3>
          <p>Join and rent now.</p>
          <button className="signup-btn">Sign Up</button>
        </div>
        <div className="login-right">
          <div className="form-group">
            <label>
              User ID<span className="required">*</span>
            </label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>
              Password<span className="required">*</span>
            </label>
            <input type="password" />
          </div>

          <button className="login-btn">Log in</button>
          <div className="helper-links">
            <a href="#">Forgot User ID?</a> | <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Login;

