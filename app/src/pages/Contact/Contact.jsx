import React from 'react'
import './contact.css'
function Contact() {
  return (
    <>    
    
   
<form className="form" >
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name"/><br/>
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email"/><br/>

<label htmlFor="message">Message:</label>

  <textarea id="message" name="message"></textarea><br/>
  <input type="submit" value="Submit" />
</form> 

    </>
  )
}

export default Contact