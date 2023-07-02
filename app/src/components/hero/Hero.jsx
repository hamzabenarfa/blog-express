import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className=" flex flex-col items-center justify-center m-1 mt-2 rounded-md bg-teal-400">
        
          <h1>Welcome to our blog</h1>
          <p>
            We share the latest news and insights on technology, design and more
          </p>
          <Link to="/login" className="cta-button">
            Join Us
          </Link>
        
        
      </section>
    </>
  );
}

export default Hero;
