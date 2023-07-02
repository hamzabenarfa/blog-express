import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <header>
      <nav className="hidden md:flex flex-row items-center justify-between p-4 rounded-md m-1 shadow-xl ">
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
      <nav className="flex md:hidden flex-row items-center rounded-md m-1 justify-between p-6 shadow-xl ">
        <h1 className="text-xl">
          <Link className="link" to="/">
            Blog
          </Link>
        </h1>
        <MenuIcon />
      </nav>
    </header>
  );
}

export default Navbar;
