import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

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

  const formattedDate = post.createdAt ? format(new Date(post.createdAt), 'MMMM dd, yyyy') : '';

  return (
    <section className="bg-gray-100 min-h-screen p-8 lg:p-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-sm text-gray-600 mb-2">By {post.username} | {formattedDate}</p>
        <img src={post.photo} alt={post.title} className="w-full h-auto rounded-lg mb-6" />
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{post.descreption}</p>
        {/* Optional: Add a comment section or author bio */}
      </div>
    </section>
  );
}

export default Post;
