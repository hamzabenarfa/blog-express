import React from "react";
import { Link } from "react-router-dom";
import "./posts.css";
import useAxios from "../../hooks/useAxios";
import time from "../../components/Helpers/TimeFormat";

function Posts() {
  const url = process.env.REACT_APP_URL

  const { data } = useAxios(`${url}/posts`, "get");

  return (
    <div>
      {data ? (
        data.map((post) => (
          <div className="post-section" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <div className="post-meta">
              <p className="post-author">{post.username}</p>
              <p className="post-date">{time(post.createdAt)}</p>
            </div>
            <div className="post-content-wrap">
              <img className="post-image" src={post.photo} alt="Post Image" />
              <p className="post-content">
                {post.descreption && post.descreption.substring(0, 200)}...
              </p>
            </div>

            <div className="post-footer">
              <Link to={`/post/${post._id}`} className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Posts;
