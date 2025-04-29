import React from "react";
import '../../styles/Hero.css'
function Hero() {
  return (
    <section id="hero_section">
      
      <div className="hero-text">
      <h3 className="title">We Ensure better education
        <br />
        for a better world
      </h3>
      <p className="discription">
      Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education      </p>
     
      </div> <div className="btn_container">
        
      <a className="btn">
              Explore More  <i className="bi bi-arrow-right explore-icon"></i>
            </a>
      </div>
    </section>
  );
}
export default Hero;
