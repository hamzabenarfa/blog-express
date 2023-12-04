import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import time from "../../components/Helpers/TimeFormat";

function Post() {
  const [post, setPost] = useState({});
  const url = process.env.REACT_APP_URL;
  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      try {
        const res = await axios.get(`${url}/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getPost();
  }, [id]);

  return (
    <>
      <section className="min-h-screen flex flex-col items-left lg:mx-60 justify-center p-4">
        <h1 className="text-4xl text-left">{post.title}</h1>
        <p className="text-sm font-bold text-left">{post.username}</p>
        <p className="text-sm font-bold text-left">{time(post.createdAt)}</p>
        <img src={post.photo} alt={post.title} className="rounded-md" />
        <p className="font-semibold text-justify">{post.descreption}</p>
      </section>
    </>
  );
}

export default Post;
