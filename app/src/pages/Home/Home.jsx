import React from "react";
import "./Home.css";
import useAxios from "../../hooks/useAxios";
import Hero from "../../components/hero/Hero";
import HomePost from "../../components/Custom/HomePost";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  dataLayer: {
    userId: "001",
    page: "Home",
    event: "pageChange",
  },
  dataLayerName: "PageDataLayer",
};

function Home() {
  const url = process.env.REACT_APP_URL;
  const { data: posts } = useAxios(`${url}/posts`, "get");

  TagManager.dataLayer(tagManagerArgs)
  

  return (
    <div>
      <Hero />
      <h1>Recent Posts:</h1>
      <div className="home-main-container">
        <div className="home-left-section">
          <div className="home-post-section">
            <div className="home-post-container">
              <HomePost posts={posts} first={1} second={2} />
            </div>
       
            <div className="home-post-container">
              <HomePost posts={posts} first={0} second={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
