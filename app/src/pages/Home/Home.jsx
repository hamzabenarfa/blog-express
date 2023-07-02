import React from "react";

import useAxios from "../../hooks/useAxios";
import Hero from "../../components/hero/Hero";
import HomePost from "../../components/Custom/HomePost";

function Home() {
  const url = process.env.REACT_APP_URL;
  const { data: posts } = useAxios(`${url}/posts`, "get");

  return (
    <section className="min-h-screen">
      <Hero />

      <div className="p-2">
        <h1 className="text-xl font-medium">Latest Articles :</h1>
        <div className="flex flex-col space-y-2">
        
          <HomePost posts={posts} first={0} second={1} />
        </div>
      </div>
    </section>
  );
}

export default Home;
