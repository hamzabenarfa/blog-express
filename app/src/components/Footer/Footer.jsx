import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <footer className="flex items-center flex-row justify-between">
      <h1 className="font-semibold">Blog</h1>
      <p className="text-sm">copyright© 2023 all reserved</p>

      <div className="">
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </footer>
  );
}

export default Footer;
