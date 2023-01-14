import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';

function Card() {

  const [posts, setPosts] = useState([]);
 
 
  useEffect(() => {
    async function getPosts() {
   try{
    const response = await axios.get('http://localhost:4000/api/posts')
    setPosts(response.data)
    console.log(response.data[0].title)
   }
   catch(error){
     console.log(error)
    
   }
    
  }
  getPosts();
}, [])
  

  
  return (

    <div class='main'>

          

    </div>
  )
}

export default Card