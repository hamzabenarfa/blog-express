import React from "react";
import "./Home.css";
import Card from "../../components/card/Card";
import Category from "../../components/category/Category";
function Home() {
 



  return (
    <div>

     
      <div className="cont">
        <div>
          <Card />
         
        </div>

        <div className="item">
         <Category />
        </div>
      </div>
    </div>
  );
}

export default Home;
