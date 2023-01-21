import React from 'react'
import { Link } from 'react-router-dom'
import { useState  } from 'react'
import axios from 'axios'
import './register.css'
function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setMail] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) =>{
      e.preventDefault();
    try {
       const res = await axios.post('http://localhost:4000/api/auth/register',{
            username,
            email,
            password,
        })
        res.data && window.location.replace('/login')}
        catch(err){
                      
             console.log(err)
          setError(true);
        }
 
  }

  return (
    <div>    <div className="register-page">
    <div className="form">
      <form className="register-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="name" onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type="text" placeholder="email address"onChange={(e)=>{setMail(e.target.value)}}/>
        <button type='submit'>create</button>
        <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
      </form>
    </div>
  </div></div>
  )
}

export default Register