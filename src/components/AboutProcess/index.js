import React from "react";

import classes from './aboutProcess.module.css';
import AboutSlide from "../../atoms/AboutSlide"

const AboutProcess = () => {

    return(
      <>
      <div className={classes.what}>
        <h2>What</h2>
        <p className="w-25" style={{}}>
          Create emotions by combining design and technology.
          to turn visions into digital experiences, which people love living in.
        </p>
      </div>
      <AboutSlide/>
      </>
    )
}

export default AboutProcess