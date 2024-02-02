import React from "react";
import "./About.css";
import AboutImg from "../../assets/profile1.jpg";
import Resume from "../../assets/Catherine_Resume.pdf";
import Info from "./Info";
import { ReactComponent as Files } from "../../assets/files.svg";


function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            I am a detail-oriented and results-driven Frontend Engineer with over 3 years of experience, known for creating dynamic and responsive web applications using ReactJS and TypeScript. Adept at collaborating within cross-functional teams to deliver high-quality products within project timelines. Proven track record of optimizing projects for cross-browser and multi-platform compatibility. Demonstrates flexibility in adapting to new technologies and methodologies, ensuring an agile and innovative approach. Recognized for fostering a collaborative environment and effectively communicating with diverse stakeholders. Committed to achieving excellence in frontend development through creativity, adaptability, and a collaborative mindset. 
          </p>

          <a download="" href={Resume} className="button button--flex">
            Download Resume <Files fill='var(--container-color)'/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
