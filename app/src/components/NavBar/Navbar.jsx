import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);
  console.log("🚀 ~ file: Navbar.jsx:8 ~ Navbar ~ showMenu:", showMenu);
  const [navbar, setNavbar] = React.useState(false);

  return (
    <header className="">
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
        <h1 className="text-xl font-medium animate-fade-up">
          <Link className="link" to="/" onClick={() => setShowMenu(false)}>
            Benarfa's Blog
          </Link>
        </h1>
        <MenuIcon
          className="hover:cursor-pointer animate-fade-up"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="">
            <Link className="link" to="/">
              Home
            </Link>

            <Link className="link" to="/Posts">
              Posts
            </Link>

            <Link className="link" to="/about">
              About us
            </Link>

            <Link className="link" to="/contact">
              Contact
            </Link>

            <Link className="link" to="/login">
             Login
            </Link>
          </div>
        )}
      </nav>
    </header>
    
  );
}

export default Navbar;
