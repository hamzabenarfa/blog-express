import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {


  return (
    <>
      <nav className="flex  items-center justify-between p-4 g">
        <div className="">
          <Link className="text-xl font-semibold" to="/">
            Benarfa's Blog
          </Link>
        </div>

        <div className=" flex gap-4 items-center justify-center">
          <div>
            <Link className="link" to="/Posts">
              Posts
            </Link>
          </div>
          <div>
            <Link className="link" to="/about">
              About us
            </Link>
          </div>
          <div>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div>
            <Link className="link" to="/login">
              <Person2OutlinedIcon />
            </Link>
          </div>
        </div>
      </nav>

     
    </>
  );
}

export default Navbar;
