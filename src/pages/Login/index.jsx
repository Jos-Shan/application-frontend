import React, { useState, useEffect} from "react";
import API from '../../helpers/api';
import './login.css';

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username, password };
    API.post("/auth/login", data)
      .then((res) => {
        console.log("Login Response Data ====>", res)
        setSuccess(true);
        if (res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        setTimeout(() => {
          setSuccess(false);
        }, 3000)
      })
      .catch((err) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000)
        console.log(err.message);
      });
  };

  return (
    <div class="wrapper">
      <div class="logo">
        <img
          src="images/logo.png"
          alt="CodeQueen logo"
          width="200px"
        />
      </div>
      {success && (
        <div class="alert alert-success" role="alert">
          Successfuly Logged on
        </div>
      )}
      {error && (
        <div class="alert alert-danger" role="alert">
          Login Failed
        </div>
      )}
      <div class="big-one">
        <h1 class="form-title">Login</h1>

        <div class="container">
          <form class="form" id="loginform" method="POST" onSubmit={handleSubmit}>
            <div class="form-input-group">
              <input
                type="text"
                class="form-iinput"
                id="loginUsername"
                name="username"
                autofocus
                placeholder="Username"
                value={username}
                onChange={(e)=> setUserName(e.target.value)}
                required
              />
            </div>
            <div class="form-input-group">
              <input
                type="password"
                class="form-iinput"
                id="security"
                name="password"
                autofocus
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
              />
            </div>
            <div class="forgotpass">
              {" "}
              <a href="/forgotpassword" class="ml-auto mb-0 text-md">
                Forgot Password?
              </a>
            </div>
            <button type="submit" class="form-button">
              Submit
            </button>
            <p class="form-text">
              Don't have an account?{" "}
              <a id="form-link" href="/signup">
                Sign Up Here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
