import React, { useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { useState } from "react";
import photo from "../../photo/express.jpg";
import "./profile.css";
import { Link } from "react-router-dom";
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
      <div className="user-profile">
        <div className="user-photo-name-container">
          <img className="user-photo" src={photo} alt="User Photo" />
          <h1 className="user-name">{user.username}</h1>
        </div>
      </div>

      <div className="mc">
        <div className="map">
          {posts.map((post) => {
            return (
              <div key={post.id}>
                {user.username === post.username && (
                  <div>
                    <div className="user-profile">
                      {/* posts */}
                      <div className="kcontainer">
                        <div className="user-posts-section">
                          <div className="post">
                          
                              <h2 className="post-title">  <Link to={`/post/${post._id}`}>{post.title}   </Link></h2>
                         
                            <p className="post-content">
                        
                              {post.descreption.substring(0, 100)}...
                            </p>
                            <div className="post-buttons">
                              <button className="edit-button">Edit</button>
                              <button className="delete-button">Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="user-info">
          <p>User information </p>
          <h5>Mail : </h5>
          <h4>{user.email}</h4>
        </div>
      </div>
    </>
  );
}

export default Profile;
