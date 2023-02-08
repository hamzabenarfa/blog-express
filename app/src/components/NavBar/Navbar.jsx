import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/Posts">
              Posts
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            BLOG
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/about">
              About us
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>

            <div className="icons">
              <Link className="link" to="/login">
                <Person2OutlinedIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
