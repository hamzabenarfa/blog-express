import React from "react";
import "./Home.css";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import HomePost from "../../components/Custom/HomePost";
function Home() {
  const { data } = useAxios("http://localhost:4000/api/categories", "get");
  const { data: posts } = useAxios("http://localhost:4000/api/posts", "get");

  return (
    <div>
      <Hero />
      <h1>Recent Posts:</h1>
      <div className="home-main-container">
        <div className="home-left-section">
          <div className="home-post-section">
            <div className="home-post-container">
              <div className="home-post-img">
                <img src="img/111.jpg" alt="Post 1" />
              </div>
              <HomePost posts={posts} first={1} second={2} />
            </div>
            <div className="home-post-container">
              <div className="home-post-img">
                <img src="img/111.jpg" alt="Post 2" />
              </div>
              <HomePost posts={posts} first={0} second={1} />
            </div>
          </div>
        </div>

        <div className="home-right-section">
          <div className="home-category-section">
            <div className="home-category-container">
              <h2>Category : </h2>
              {data &&
                data.map((category) => (
                  <ul key={category.id}>
                    <li>
                      <Link to={"/"}>{category.name}</Link>
                    </li>
                  </ul>
                ))}
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
    </div>
  

</div>

>>>>>>> 42334cfa61eef5ebe9a75cd9f3fe7d878ad3bd59
    </div>
  );
}

export default Home;
