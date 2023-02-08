import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
function Hero() {
  return (
    <div>
      <section class="hero-area">
        <div class="hero-content">
          <h1>Welcome to our blog</h1>
          <p>
            We share the latest news and insights on technology, design and more
          </p>
          <Link to="/login" class="cta-button">
            Join Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hero;
