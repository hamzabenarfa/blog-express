import React from "react";
import { useParams } from "react-router-dom";
import "./_post.css";
import useAxios from "../../hooks/useAxios";
import time from "../../components/Helpers/TimeFormat";
function Post() {
  const url = process.env.REACT_APP_URL

  const { id } = useParams();
  const { data } = useAxios(`${url}/posts/${id}`, "get");
  console.log(data)
  return (
    <div className="main">
      <div className="section">
        <h2 className="title">{data && data.title}</h2>
        <div className="meta">
          <p className="author">{data && data.username}</p>
          <p className="date">{time(data && data.createdAt)}</p>
        </div>
        <img className="image" src={data && data.photo} />
        <p className="content">{data && data.descreption}</p>
      </div>

      {/* <div className="profile">
        <div className="test">
          <div className="test1">
            <h1>{data && data.username}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nemo
              vel necessitatibus voluptate accusantium minima ut aliquam
              voluptas excepturi rerum rem esse expedita nulla, pariatur natus
              consequatur, sequi quasi atque.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Post;
