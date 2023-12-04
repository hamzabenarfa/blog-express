import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Hero() {
  return (
    <>
      <section
        className="flex min-h-screen items-center flex-col justify-center "
        style={{
          backgroundImage: `url(/111.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderImage: "linear-gradient(#0003, #000)",
          borderImageSlice: 1,
        }}
      >
        <div className="flex items-center justify-center flex-col space-y-4">
          <h1 className="text-7xl font-bold  ">
            Inside Design: Stories and interviews
          </h1>
          <h1 className="text-2xl">
            Subscribe to learn about new product features , the lateest in
            technology and undates.
          </h1>
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
