import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
function Login() {
  const url = process.env.REACT_APP_URL;

  const history = useNavigate();
  const username = useRef();
  const password = useRef();

  const [error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);
  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${url}/auth/login`, {
        email: username.current.value,
        password: password.current.value,
      });
      res.data && history("/profile", { state: { id: res.data._id } });
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="login-page  ">
        <div className="l-form p-12 rounded-xl">
          <form className="login-form" onSubmit={submit}>
            <input type="text" ref={username} placeholder="username" />
            <input type="password" ref={password} placeholder="password" />
            {error && (
              <p className="-mt-1 mb-2 text-red-500 text-sm font-bold text-left">
                Something went wrong!
              </p>
            )}
            {Loading && (
              <p className="-mt-1 mb-2 text-green-500 text-sm font-bold text-left">
                Loading...
              </p>
            )}
            <button
              type="submit"
              disabled={Loading}
              className={`rounded-md ${
                Loading && "opacity-50 cursor-not-allowed"
              }`}
            >
              login
            </button>

            <p className="message">
              Not registered? <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
