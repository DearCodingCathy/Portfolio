import React from "react";
import "./Projects.css";
import Work from "./Work";

const Projects = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <Work />
    </section>
  );
};

export default Projects;
