import React from "react";
import useAxios from "../../hooks/useAxios";
import Hero from "../../components/hero/Hero";
import time from "../../components/Helpers/TimeFormat";

function Home() {
  const url = process.env.REACT_APP_URL;
  const { data: posts } = useAxios(`${url}/posts`, "get");
  console.log(posts)
  return (
    <section className="flex flex-col bg-gray-200 min-h-screen">
      <Hero />
      <section className="flex flex-row justify-around p-4 pl-16  ">

        <div>
          <div className="">
            <h1 className="text-2xl font-semibold">Recent blog posts</h1>
            <img src={posts && posts[1].photo} alt="" className="object-cover  w-96" />
            <h6 className="text-xs font-semibold capitalize">{posts && posts[1].username} {time(posts && posts[1].createdAt)}</h6>
            <h1 className="font-bold text-2xl pt-2">{posts && posts[1].title}</h1>
            <h5 className="text-sm ">{posts && posts[1].descreption}</h5>
          </div>
        </div>

        <div className="">
          
     { posts && posts.map((post) => ( 
          <div className=" flex flex-row m-4 p-4  " key={post.id}>
            <div className="">
              <img src={post && post.photo} alt="" className="object-cover w-60" />
            </div>
            <div className="w-[400px] p-4">
            <h6 className="text-xs font-semibold capitalize">{post && post.username} {time(post && post.createdAt)}</h6>
            <h1 className="font-bold text-2xl pt-2">{post && post.title.substring(0, 30)}...</h1>
            <h5 className="text-sm ">{post && post.descreption.substring(0, 200)}...</h5>
            </div>
          </div>
      ))
     }
        </div>
      </section>


    </section>
  );
}

export default Home;
