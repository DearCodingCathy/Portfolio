import React from "react";
import './About.css';
import AboutImg from '../../assets/about.jpg';
// import Resume from '../../assets/Catherine_Resume.pdf';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid"></div>
    </section>
  );
}

export default About;
