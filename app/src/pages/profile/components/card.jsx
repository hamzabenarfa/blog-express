import React from "react";
import { Link } from "react-router-dom";

function Card({ post, deletePost }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-4 max-w-2xl">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">
          <Link to={`/post/${post._id}`} className="">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-700 mb-4">
          {post.description ? post.description.substring(0, 200) + '...' : 'No description available'}
        </p>
        <div className="flex justify-end space-x-2">
          <Link to={`/edit/${post._id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
          </Link>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => deletePost(post._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
