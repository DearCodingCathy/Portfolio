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
            I am an experienced Frontend engineer from New York, and excited about creating stunning websites and excuting pixel perfect designs. My expertise lies in translating designs into fully functional websites, while utilizing my develoment skills to enhance and customize features. My goal is to craft visually appealing, user-friendly websites/features that provide a seamless browsing experience. 
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
