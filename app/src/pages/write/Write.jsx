import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './write.css'
function Write() {
   

    const [title, seTtitle] = useState('')
    const [descreption, setdescreption] = useState('')
 
     const { id } = useParams()

    const handleSubmit = async (e) =>{
        e.preventDefault();
      try {
         const res = await axios.post('http://localhost:4000/api/posts/',{
              username : id,
              title,
              descreption,
          })
          res.data && window.location.replace(`/`)}
          catch(err){
                        
               console.log(err)
          }
        
        }

   


  return (
    <div>
 <div className=' write-container'>
        <div class="write-card">
        <form >

    
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="Enter your title..." onChange={e => seTtitle(e.target.value)} />

            <label htmlFor="descreption">Descreption</label>
            <textarea  cols="30" rows="10" name="descreption" id="descreption" placeholder="Enter your descreption..." onChange={e => setdescreption(e.target.value)}></textarea>

            <button type="submit" className='write' onClick={handleSubmit}>Submit</button>
        </form>

    </div>
    </div>
     </div>
  )
}

export default Write