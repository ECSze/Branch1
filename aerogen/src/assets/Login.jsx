import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="page-wrapper">
      <div className="login-form-container">
        <div className="left-panel">
          <h2>Not a Aerogen Member?</h2>
          <p>Join and rent now.</p>
          <button>Sign Up</button>
        </div>
        <div className="right-panel">
          <h2>LOGIN</h2>
          <form>
            <label>User ID*</label>
            <input type="text" name="userID" />

            <label>Password*</label>
            <input type="password" name="password" />

            <button type="submit">Log In</button>

            <div className="form-links">
              <a href="#">Forgot User ID?</a>
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
