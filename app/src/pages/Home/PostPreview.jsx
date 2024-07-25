import React from "react";
import { Link } from "react-router-dom";
import timeFormat from "../../utils/TimeFormat";
const PostPreview = ({ post }) => (
  <div className="flex flex-col md:flex-row m-4 p-4 bg-white rounded-lg shadow-md" key={post._id}>
    <div className="w-full md:w-60">
      <Link to={`/post/${post._id}`}>
        <img
          src={post.photo}
          alt={post.title}
          className="object-cover w-full md:w-60"
        />
      </Link>
    </div>
    <div className="flex flex-col w-full mt-4 md:mt-0 md:pl-4">
      <h6 className="text-xs font-semibold capitalize">
        {post.username} {timeFormat(post.createdAt)}
      </h6>
      <Link to={`/post/${post._id}`}>
        <h1 className="font-bold text-xl pt-2">
          {post.title.substring(0, 30)}...
        </h1>
      </Link>
      <h5 className="text-sm">
        {post.description.substring(0, 200)}...
      </h5>
    </div>
  </div>
);

export default PostPreview;
