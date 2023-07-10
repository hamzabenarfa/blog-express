import React from "react";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Hero() {
  return (
    <>
      <section className="hero bg-cover bg-center relative m-1 ">
        <div className="bg-black opacity-4  0 absolute top-0 left-0 w-full h-full"></div>
        <div className="container mx-auto py-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unleashing the Power of Technology
          </h1>
          <p className="text-lg text-white mb-8">
            Welcome to Benarfa's Blog, your ultimate destination for all things
            tech. Dive into the world of cutting-edge innovations, insightful
            tech news, and practical guides that will empower you to harness the
            full potential of technology. From the latest gadgets and
            breakthrough advancements to expert analysis and actionable tips,
            we're here to fuel your passion for all things digital.
          </p>
          <Link
            to="/posts"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
          >
            Explore Now
          </Link>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white">
              Join Our Tech Community
            </h2>
            <img
              src="./hero.jpg"
              alt="Testimonial Image"
              className="w-12 h-12 rounded-full mx-auto mt-4"
            />
            <p className="text-white mt-4 cursor-pointer">
              <Link to="/login">Join Now</Link>
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white">
              Follow our Social Media
            </h2>
            <TwitterIcon className="text-white mt-4 cursor-pointer" />
            <FacebookRoundedIcon className="text-white mt-4 cursor-pointer" />
            <InstagramIcon className="text-white mt-4 cursor-pointer" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
