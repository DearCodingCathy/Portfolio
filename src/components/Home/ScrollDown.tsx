import React from 'react'
import { ReactComponent as Scroll } from "../../assets/scroll.svg";


function ScrollDown() {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <Scroll stroke='var(--title-color)' />
        <span className="home__scroll-name">Scroll Down
        </span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  )
}

export default ScrollDown