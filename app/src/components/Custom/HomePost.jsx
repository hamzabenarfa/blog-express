import React from "react";
import { Link } from "react-router-dom";
function HomePost(props) {
  const { posts = [] } = props;
  return (
    <div>
      {posts &&
        posts.slice(props.first, props.second).map((post) => (
          <div className="home-post-content" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.descreption.substring(0, 100)}...</p>
            <Link to={`/post/${post._id}`} className="read-more-btn">
              Read More
            </Link>
          </div>
        ))}
    </div>
  );
}

export default HomePost;
