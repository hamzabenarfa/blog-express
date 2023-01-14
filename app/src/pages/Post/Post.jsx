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
      <div className="post-section">
        <h2 className="post-title">{posts.title}</h2>
        <div className="post-meta">
          <p className="post-author">{posts.username}</p>
          <p className="post-date">{ time()}</p>
        </div>
        <img className="post-image" src="..." alt="Post Image" />
        <p className="post-content">
          {posts.descreption}
        </p>
      </div>

    </div>
  )
}

export default Post