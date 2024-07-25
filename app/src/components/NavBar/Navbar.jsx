import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";
function Navbar() {


  return (
    <>
      <nav className="flex text-black items-center justify-between p-4 py-6 border-b ">
        <div className="">
          <Link className="text-xl font-semibold" to="/">
            Blog Express
          </Link>
        </div>

        <div className=" flex gap-4 items-center justify-center">
          <div>
            <Link className="link" to="/Posts">
              Posts
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
