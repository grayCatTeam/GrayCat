import React from "react";

import classes from './aboutProcess.module.css';
import AboutSlide from "../../atoms/AboutSlide"
import AboutJobTitle from "../../atoms/AboutJobTitle"


const AboutProcess = () => {

  return(
    <>
      <div className={classes.what}>
        <h2>What</h2>
        <p>
          Create emotions by combining design and technology.
          to turn visions into digital experiences, which people love living in.
        </p>
      </div>



      <div className={classes.job_title_card} >
        <AboutJobTitle
          title="Strategy and Planning"
          text="We create amazingly responsive websites through the use of landing pages, e commerce platforms, or more intricate web applications."
          tagOne="IOS"
          tagTwo="WatchOS"
          tagThree="Android"
          tagFour="Custom App"
          tagFive="Windows"
        />
        <AboutJobTitle
          title="Web Development"
          text="We create amazingly responsive websites through the use of landing pages, e commerce platforms, or more intricate web applications."
          tagOne="IOS"
          tagTwo="WatchOS"
          tagThree="Android"
          tagFour="Custom App"
          tagFive="Windows"
        />
        <AboutJobTitle
          title="Mobile Development"
          text="We carefully craft the user experience of iOS and Android applications. We are experts at making apps that are easy to use, beautiful and engaging."
          tagOne="IOS"
          tagTwo="WatchOS"
          tagThree="Android"
          tagFour="Custom App"
          tagFive="Windows"
        />
        <AboutJobTitle
          title="Data Visualiton and Reporting"
          text="We create amazingly responsive websites through the use of landing pages, e commerce platforms, or more intricate web applications."
          tagOne="IOS"
          tagTwo="WatchOS"
          tagThree="Android"
          tagFour="Custom App"
          tagFive="Windows"
        />
      </div>
     

    </>
  )
}

export default AboutProcess;