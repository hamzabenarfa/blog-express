import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'
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

    <div>
          {posts.map(post=> (
        <div className='card-xd' key={post.id}>
            <div className='image'>
                <img src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390" alt="photo" />
            </div>

            <div className='text'>
                <h1 className='title'>{post.title}</h1>
                <p className='description'>{post.descreption} </p>
                <Link to="/" className='button'>Read More</Link>
            </div>
          </div>
          ))
        }

    </div>
  )
}

export default Card