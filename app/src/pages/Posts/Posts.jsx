import React from "react";
import { Link } from "react-router-dom";
import "./posts.css";

import axios from 'axios';
import { useState, useEffect } from 'react';
import photo from "../../photo/express.jpg";


function Posts() {

  const [posts, setPosts] = useState([]);
 
 
  useEffect(() => {
    async function getPosts() {
   try{
    const response = await axios.get('http://localhost:4000/api/posts')
    setPosts(response.data)
   }
   catch(error){
     console.log(error)
    
   }
    
  }
  getPosts();
}, [])
  
function time (x){
  const  d= new  Date(x)
  return d.toDateString().substring(4,15);
}


  return (
    <div>
      {posts.map(post => (
        
      <div className="post-section" key={post.id}>
        <h2 className="post-title">{post.title}</h2>
        <div className="post-meta">
          <p className="post-author">{post.username}</p>
          <p className="post-date">{time(post.createdAt)}</p>
        </div>
        <div className="post-content-wrap">

        <img className="post-image" src={photo} alt="Post Image" />
        <p className="post-content">
          {post.descreption.substring(0, 200)}...
            </p>
        </div>
         
        <div className="post-footer">
          <Link to={`/post/${post._id}`} className="read-more-btn">Read More</Link>
        </div>
      </div>
      ))}
      
    </div>
  );
}







export default Posts;










