import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <section className="flex min-h-screen items-center flex-col py-4 md:flex-row justify-center md:px-10 bg-white">
        <div className="text-left flex items-center justify-center flex-col space-y-6 p-8 ">
          <h1 className="text-7xl font-extrabold drop-shadow-lg">
            Become a Blogger Now
          </h1>
          <p className="text-xl font-light max-w-2xl">
            Share your stories and insights with the world in just a few clicks.
            Join our community of passionate bloggers today!
          </p>
          <Link to="/register">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mt-6 px-8 py-4 bg-white rounded-full text-lg font-semibold hover:text-blue-200 transition duration-300">
            Create Your Account
          </button>
          </Link>
        </div>

        <img src="./svg/hero.svg" alt="" className="px-8" />
      </section>
    </>
  );
}

export default Hero;
