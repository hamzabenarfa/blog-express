import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
 import "./_post.css";
function Post() {
  const { id } = useParams()
  
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    async function getPosts() {
   try{
    const response = await axios.get(`http://localhost:4000/api/posts/${id}`)
    setPosts(response.data)
   }
   catch(error){
     console.log(error)
   }
    
  }
  getPosts();
}, [])
  
function time (){
  const  d= new  Date(posts.createdAt)
  return d.toDateString().substring(4,15);
}

  return (
    <div>
      <div className="section">
        <h2 className="title">{posts.title}</h2>
        <div className="meta">
          <p className="author">{posts.username}</p>
          <p className="date">{ time()}</p>
        </div>
        <img className="image" src="..." alt="Post Image" />
        <p className="content">
          {posts.descreption}
          
        </p>
      </div>

    </div>
  )
}

export default Post