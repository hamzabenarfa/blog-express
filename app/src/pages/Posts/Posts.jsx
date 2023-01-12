import React from "react";
import { Link } from "react-router-dom";
import "./Posts.scss";
function Posts() {


  return (
    <div>
      <div className="container">
        {/* {data.data.map((post) => (
          <div key={post.id} className="post">
            <h1 className="display-4"></h1>
            <div>{post.substring(0, 400)}...</div>
            <Link to={`/post/${post.id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Posts;
