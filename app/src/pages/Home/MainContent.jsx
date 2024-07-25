import React from "react";
import { Link } from "react-router-dom";
import PostPreview from "./PostPreview";
import timeFormat from "../../utils/TimeFormat";
import { useState, useEffect } from "react";
import axios from "axios";
const MainContent = () => {
  const url = process.env.REACT_APP_URL;
  const [posts, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${url}/posts`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-around p-4">
      <div className="mb-8 md:mb-0 ">
        <div className="w-full md:w-96">
          <h1 className="text-2xl font-semibold">Recent Blog Posts</h1>
          {posts && posts[1] && (
            <Link to={`/post/${posts[1]._id}`}>
              <img
                src={posts[1].photo}
                alt={posts[1].title}
                className="object-cover w-full md:w-96"
              />
            </Link>
          )}
          <div className="flex flex-col mt-4">
            {posts && posts[1] && (
              <>
                <h6 className="text-xs font-semibold capitalize">
                  {posts[1].username} {timeFormat(posts[1].createdAt)}
                </h6>
                <Link to={`/post/${posts[1]._id}`}>
                  <h1 className="font-bold text-2xl pt-2">
                    {posts[1].title.substring(0, 30)}
                  </h1>
                </Link>
                <h5 className="text-sm">
                  {posts[1].description.substring(0, 200)}
                </h5>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="w-full md:max-w-2xl">
        {posts &&
          posts
            .slice(0, 3)
            .map((post) => <PostPreview key={post._id} post={post} />)}
      </div>
    </section>
  );
};

export default MainContent;
