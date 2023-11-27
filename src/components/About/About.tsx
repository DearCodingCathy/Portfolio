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
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy withthe
            projects carried out.
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
