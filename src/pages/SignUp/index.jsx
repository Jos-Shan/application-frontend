import React from "react";
import './signup.css';


const Signup = () => {
  return (
    <div class="wrapper">
      <div class="logo">
        <img src="images/Code Queen Logo.png" alt="CodeQueen logo" />
      </div>
      <div class="form-space">
        <h2 class="title">Sign up</h2>
        <form class="form" id="signupform" method="POST" action="/signup">
          <div class="form-area">
            <div class="form-group">
              <input
                type="text"
                class="form-control item"
                id="firstname"
                name="firstname"
                placeholder="Firstname"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control item"
                id="lastname"
                name="lastname"
                placeholder="Lastname"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control item"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control item"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control item"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-block create-account"
                id="register-btn"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
