import React from "react";
import "./Home.css";
function Home() {
 



  return (
    <div>

<div className="amain-container">
    <div className="aleft-section">
        <div className="apost-section">
            
            <div className="apost-container">
              
                <div className="apost-img">
                    <img src="image.jpg" alt="Post 1" />
                </div>
                <div className="apost-content">
                    <h2>Post 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in feugiat congue,
                        ipsum
                        erat convallis ipsum, a malesuada orci ante euismod augue.</p>
                </div>
            
            </div>
            <div className="apost-container">
                <div className="apost-img">
                    <img src="image.jpg" alt="Post 2" />
                </div>
                <div className="apost-content">
                    <h2>Post 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in feugiat congue,
                        ipsum
                        erat convallis ipsum, a malesuada orci ante euismod augue.</p>
                </div>
              
            </div>
  
        </div>
    </div>

    <div className="aright-section">
        <div className="acategory-section">
            <div className="acategory-container">
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
