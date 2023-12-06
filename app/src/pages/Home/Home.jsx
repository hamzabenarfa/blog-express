import React from "react";
import useAxios from "../../hooks/useAxios";
import Hero from "../../components/hero/Hero";
import time from "../../components/Helpers/TimeFormat";
import { Link } from "react-router-dom";
function Home() {
  const url = process.env.REACT_APP_URL;
  const { data: posts } = useAxios(`${url}/posts`, "get");
  console.log(posts);

  return (
    <main className="flex flex-col bg-gray-200 min-h-screen">
      <Hero />
      <section className="flex flex-row justify-around p-4 pl-16  ">
        <div>
          <div className="w-96">
            <h1 className="text-2xl font-semibold">Recent blog posts</h1>
            <Link to={posts && `/post/${posts._id}`}>
              <img
                src={posts && posts[1].photo}
                alt=""
                className="object-cover  w-96"
              />
            </Link>
            <div className="flex flex-col">
              <h6 className="text-xs font-semibold capitalize">
                {posts && posts[1].username} {time(posts && posts[1].createdAt)}
              </h6>
              <Link to={posts && `/post/${posts._id}`}>
                <h1 className="font-bold text-2xl pt-2">
                  {posts && posts[1].title.substring(0, 30)}
                </h1>
              </Link>
              <h5 className="text-sm     ">
                {posts && posts[1].descreption.substring(0, 200)}
              </h5>
            </div>
          </div>
        </div>

        <div className="">
          {posts &&
            posts
              .map((post) => (
                <div className=" flex flex-row m-4 p-4 " key={post._id}>
                  <div className="">
                    <Link to={`/post/${post._id}`}>
                      <img
                        src={post && post.photo}
                        alt=""
                        className="object-cover w-60"
                      />
                    </Link>
                  </div>
                  <div className="w-[400px] pl-4">
                    <h6 className="text-xs font-semibold capitalize">
                      {post && post.username} {time(post && post.createdAt)}
                    </h6>
                    <Link to={`/post/${post._id}`}>
                      <h1 className="font-bold text-2xl pt-2">
                        {post && post.title.substring(0, 30)}...
                      </h1>
                    </Link>
                    <h5 className="text-sm ">
                      {post && post.descreption.substring(0, 200)}...
                    </h5>
                  </div>
                </div>
              ))
              .slice(0, 3)}
        </div>
      </section>

      {/* <h1>All blog posts: </h1>
      <section className="flex flex-row items-center justify-center">
        {posts &&
          posts
            .map((post) => (
              <div className=" flex flex-col m-4 p-4 w-full " key={post.id}>
                <div className="">
                  <img
                    src={post && post.photo}
                    alt=""
                    className="object-cover w-64"
                  />
                </div>
                <div className="w-64 ">
                  <h6 className="text-xs font-semibold capitalize">
                    {post && post.username} {time(post && post.createdAt)}
                  </h6>
                  <h1 className="font-bold text-2xl pt-2">
                    {post && post.title.substring(0, 30)}...
                  </h1>
                  <h5 className="text-sm ">
                    {post && post.descreption.substring(0, 200)}...
                  </h5>
                </div>
              </div>
            ))
            .slice(0, 3)}
      </section> */}
    </main>
  );
}

export default Home;