import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

function Login() {
  const url = process.env.REACT_APP_URL

  const history = useNavigate();
  const username = useRef();
  const password = useRef();

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(`${url}/auth/login`, {
        username: username.current.value,
        password: password.current.value,
      });
      res.data && history("/profile", { state: { id: res.data._id } });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="login-page">
        <div className="l-form">
          <form className="login-form" onSubmit={submit}>
            <input type="text" ref={username} placeholder="username" />
            <input type="password" ref={password} placeholder="password" />
            <button type="submit">login</button>
            <p className="message">
              Not registered? <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
