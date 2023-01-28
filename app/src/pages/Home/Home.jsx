import React from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Hero from "../../components/hero/Hero";
function Home() {
 
    const [cats, setCat] = useState([]);
 
 
    useEffect(() => {
      async function getPosts() {
     try{
      const response = await axios.get('http://localhost:4000/api/categories')
      setCat(response.data)
 
     }
     catch(error){
       console.log(error)
      
     }
      
    }
    getPosts();
  }, [])

// fetching posts

const [posts, setPosts] = useState([]);

useEffect(() => {
  async function getPosts() {
 try{
  const response = await axios.get(`http://localhost:4000/api/posts/`)
  setPosts(response.data)
 }
 catch(error){
   console.log(error)
 }
  
}
getPosts();
}, [])


  return (
    <div>
      <Hero />
<h1>Recent Posts:</h1>
<div className="home-main-container">
    <div className="home-left-section">
        <div className="home-post-section">
            
            <div className="home-post-container">
              
                <div className="home-post-img">
                    <img src="img/111.jpg" alt="Post 1" />
                </div>
               
                 { posts.slice(posts.length-1,posts.length).map(post=>(
                <div className="home-post-content" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.descreption.substring(0,100)}...</p>
                    <Link to={`/post/${post._id}`} className="read-more-btn">Read More</Link>   
                </div>
                    ))}     
            </div>
            <div className="home-post-container">
                <div className="home-post-img">
                    <img src="img/111.jpg" alt="Post 2" />
                </div>
                { posts.slice(posts.length-2,posts.length-1).map(post=>(
                <div className="home-post-content" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.descreption.substring(0,100)}...</p>
                    <Link to={`/post/${post._id}`} className="read-more-btn">Read More</Link>
                </div>
                    ))}  
              
            </div>
  
        </div>
    </div>

   
    <div className="home-right-section" >
        <div className="home-category-section">
            <div className="home-category-container">
                <h2>Category : </h2>
                {cats.map(cat=>(
                <ul key={cat.id}>
                    <li><Link to={"/"}>{cat.name}</Link></li>
                </ul>
                  ))}
            </div>
        </div>
    </div>
  

</div>
<h1>Trending :</h1>
    </div>
  );
}

export default Home;
