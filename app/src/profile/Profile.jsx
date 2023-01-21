import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
function Profile() {
  const location = useLocation();

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:4000/api/users/${location.state.id}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, []);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:4000/api/posts/`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
        <h1>profile :</h1>

        {posts.map((post) => {
      
       return(
         <div key={post.id}>
           { user.username === post.username && <div> <h1>{post.title}</h1>
           
           <p >{post.descreption}</p>
           </div> }
         </div>
       )
      })}

      

    </>
  );
}

export default Profile;



  {/* {console.log(posts)}
      {posts.map((post) => {
        return(
        <div key={post.id}>
        {user.username === post.username &&   <h1 style={{color:'black',fontSize:'25px'}}>{post.title}</h1> &
        <p style={{color:'black',fontSize:'20px'}}>{post.descreption}</p>
     }
    </div>)
      })} */}
