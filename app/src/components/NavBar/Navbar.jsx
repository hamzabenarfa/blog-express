import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="wrapper">

        <div className="left">
        <div className="item">
        <Link className="link"  to="/">Home</Link>
        </div>
          <div className="item">
        
            <Link className="link"  to="/Posts/1">Posts</Link>
          </div>

         
        </div>

        <div className="center">
        
          <Link className="link" to="/">BLOG</Link>
        </div>

        <div className="right">
         
 
          <div className="item">
     
            <Link  className="link" to="/">About us </Link>
          </div>
          <div className="item">
    
            <Link  className="link" to="/">Contact </Link>

            <div className="icons">
            <Person2OutlinedIcon />
          </div>

          </div>
       

          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
