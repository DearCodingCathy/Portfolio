import React from "react";
import "./About.css";
import AboutImg from "../../assets/profile1.jpg";
import Resume from "../../assets/CB_NYT-resume.pdf";
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
           As a Frontend Engineer with over 3 years of experience, I prioritize attention to detail and achieving results. I specialize in developing dynamic and responsive web applications using ReactJS and TypeScript. My collaborative nature shines through as I work within cross-functional teams to deliver high-quality products within project deadlines. With a proven track record of optimizing projects for cross-browser and multi-platform compatibility, I am adept at adapting to new technologies and methodologies, ensuring an agile and innovative approach. 
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
