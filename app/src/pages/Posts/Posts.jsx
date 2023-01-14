import React from "react";
import { Link } from "react-router-dom";
import "./Posts.scss";
function Posts() {


  return (
    <div>
      <div className="container">

          <h2>Post</h2>
          <div className="blog-post">
            <div className="blog-post-img">
              <img src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
          </div>

          <div className="blog-post-info">
            <div className="blog-post-date">
              <span>Hamza Benarfa</span>
              <span>1 jan 2022</span>
            </div>
            <h1 className="blog-post-title">
              title 1 from express
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aut. Corporis iste distinctio cupiditate dolorem explicabo soluta harum! Possimus eveniet aliquid veniam id quod ducimus iusto blanditiis numquam quae sit.

            </p>
            <Link to="/" className="blog-post-btn"> Read More </Link>

          </div>





      </div>
    </div>
  );
}







export default Posts;










{/* {data.data.map((post) => (
  <div key={post.id} className="post">
    <h1 className="display-4"></h1>
    <div>{post.substring(0, 400)}...</div>
    <Link to={`/post/${post.id}`} className="btn btn-primary">
      Read More
    </Link>
  </div>
))} */}