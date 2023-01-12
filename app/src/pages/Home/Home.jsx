import React from "react";
import "./Home.scss";
import "./Home.scss";
import Card from "../../components/card/Card";
import Category from "../../components/category/Category";
function Home() {
 



  return (
    <div>
      <h1 className="display-1">Top Posts :</h1>

     
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
