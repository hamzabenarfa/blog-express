import React from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
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



 const filtereditem = posts.slice(0,1).map
console.log(filtereditem)
  return (
    <div>
      

<div className="amain-container">
    <div className="aleft-section">
        <div className="apost-section">
            
            <div className="apost-container">
              
                <div className="apost-img">
                    <img src="img/111.jpg" alt="Post 1" />
                </div>
               
                 { posts.slice(0,1).map(post=>(
                <div className="apost-content" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.descreption.substring(0,100)}...</p>
                </div>
                    ))}        
            </div>
            <div className="apost-container">
                <div className="apost-img">
                    <img src="img/111.jpg" alt="Post 2" />
                </div>
                { posts.slice(1,2).map(post=>(
                <div className="apost-content" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.descreption.substring(0,100)}...</p>
                </div>
                    ))}  
              
            </div>
  
        </div>
    </div>

   
    <div className="aright-section" >
        <div className="acategory-section">
            <div className="acategory-container">
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
    </div>
  );
}

export default Home;
