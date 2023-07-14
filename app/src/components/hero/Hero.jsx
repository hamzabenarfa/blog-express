import React from "react";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Hero() {
  return (
    <>
      <section className="flex items-center flex-col  justify-center h-64 mt-10  ">
        <div className="flex items-center justify-center flex-col space-y-4">
          <h1 className="text-5xl font-bold">
            Inside Design: Stories and interviews
          </h1>
          <h5>
            Subscribe to learn about new product features , the lateest in
            technology and undates.
          </h5>
          <h6>Follow Us On</h6>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          
          <FacebookRoundedIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </section>
    </>
  );
}

export default Hero;
