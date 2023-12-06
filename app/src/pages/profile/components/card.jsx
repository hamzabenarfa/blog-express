import React from "react";
import { Link } from "react-router-dom";

function card({ post, deletePost }) {
  return (
    <div
      className="flex flex-col items-start space-y-2 justify-center border-sm shadow-xl
                     m-4 rounded-lg p-4 md:max-w-xl "
    >
      <h2 className="text-xl font-bold ">
        <Link to={`/post/${post._id}`}>{post.title}</Link>
      </h2>

      <p className="text-lg">
        {post.descreption && post.descreption.substring(0, 200)}
        ...
      </p>

      <div className=" ml-auto space-x-1">
        <Link to={`/edit/${post._id}`}>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Edit
          </button>
        </Link>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={() => deletePost(post._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default card;
