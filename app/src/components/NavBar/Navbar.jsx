import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="flex flex-row items-center justify-between p-2 bg-slate-500 ">
        <div className="space-x-2">
          <Link className="link" to="/">
            Home
          </Link>

          <Link className="link" to="/Posts">
            Posts
          </Link>
        </div>

        <div className="">
          <Link className="link" to="/">
            BLOG
          </Link>
        </div>

        <div className=" space-x-2">
          <Link className="link" to="/about">
            About us
          </Link>

          <Link className="link" to="/contact">
            Contact
          </Link>

          <Link className="link" to="/login">
            <Person2OutlinedIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
