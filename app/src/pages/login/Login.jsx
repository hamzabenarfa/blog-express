import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
          <div class="login-page">
        <div class="l-form">
          <form class="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            <p class="message">Not registered? <Link to="/register">Create an account</Link></p>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Login