import React from "react";
import { Link } from "react-router-dom";
function HomePost(props) {
  const { posts = [] } = props;
  return (
    <div className="flex p-4 flex-col items-start rounded-md shadow-xl bg-[#fff] ">
      {posts &&
        posts.slice(props.first, props.second).map((post) => (
          <div key={post.id} className="flex space-x-2 items-center ">
            <img
              src={post && post.photo}
              alt="Post"
              className=" w-40 rounded-lg"
            />

            <div className=" space-y-2">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-xs">{post.descreption.substring(0, 200)}...</p>

              <button className="bg-amber-400 rounded-sm p-2">
                <Link to={`/post/${post._id}`}>Read More </Link>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default HomePost;
