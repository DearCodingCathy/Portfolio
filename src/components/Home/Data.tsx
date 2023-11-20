import React from "react";
import { ReactComponent as Hand } from "../../assets/hand.svg";
import { ReactComponent as Send } from "../../assets/send.svg";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Catherine Balogun
        <Hand className="home__hand"/>
      </h1>

      <h3 className="home__subtitle">Software Engineer</h3>
      <p className="home__description">
        {" "}
        I'm a creatiuve engineer based in New York, and I'm very passionate and
        dedicated to my work
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <Send fill="var(--container-color)"/>
      </a>
    </div>
  );
};

export default Data;
