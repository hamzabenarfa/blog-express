import React from "react";
import { Link } from "react-router-dom";
import "./posts.css";
import useAxios from "../../hooks/useAxios";
import timeFormat from "../../utils/TimeFormat";

function Posts() {
  const url = process.env.REACT_APP_URL;

  const { data } = useAxios(`${url}/posts`, "get");

  return (
    <>
      {data ? (
        data.map((post) => (
          <div className="post-section  md:mx-40 lg:mx-60" key={post._id}>
            <h2 className="post-title">{post.title}</h2>
            <div className="post-meta">
              <p className="mr-2 capitalize font-bold"> {post.username}</p>
              <p className="post-date">{timeFormat(post.createdAt)}</p>
            </div>
            <div className="post-content-wrap">
              <img
                className="post-image hidden md:block"
                src={post.photo}
                alt={post.title}
              />
              <p className="md:post-content">
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
    </>
  );
}

export default Posts;
