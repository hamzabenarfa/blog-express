import React from "react";
import "./Home.css";
function Home() {
 



  return (
    <div>

<div className="main-container">
    <div className="left-section">
        <div className="post-section">
            <div className="post-container">
                <div className="post-img">
                    <img src="image.jpg" alt="Post 1" />
                </div>
                <div className="post-content">
                    <h2>Post 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in feugiat congue,
                        ipsum
                        erat convallis ipsum, a malesuada orci ante euismod augue.</p>
                </div>
                <div className="post-button">
                    <a href="#" className="edit-btn">Edit</a>
                    <a href="#" className="delete-btn">Delete</a>
                </div>
            </div>
            <div className="post-container">
                <div className="post-img">
                    <img src="image.jpg" alt="Post 2" />
                </div>
                <div className="post-content">
                    <h2>Post 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in feugiat congue,
                        ipsum
                        erat convallis ipsum, a malesuada orci ante euismod augue.</p>
                </div>
                <div className="post-button">
                    <a href="#" className="edit-btn">Edit</a>
                    <a href="#" className="delete-btn">Delete</a>
                </div>
            </div>
  
        </div>
    </div>

    <div className="right-section">
        <div className="category-section">
            <div className="category-container">
                <h2>Category 1</h2>
                <ul>
                    <li><a href="#">Subcategory 1</a></li>
                    <li><a href="#">Subcategory 2</a></li>
                    <li><a href="#">Subcategory 3</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default Home;
