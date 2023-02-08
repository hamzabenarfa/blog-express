import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="bottom">
        <div className="left">Blog</div>
        <div className="copyright">copyright© 2023 all reserved</div>

        <div className="item">
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
