import React, { useRef } from "react"

import wireframe from "../../assets/images/wireframe@2x.png";
import analyze from "../../assets/images/analyze@2x.png";
import coding from "../../assets/images/coding@2x.png";
import motion from "../../assets/images/motion@2x.png"


import classes from './aboutSlide.module.css';
import { FaChevronDown, FaChevronUp } from "react-icons/all"




const AboutSlide = () => {

  return(
      <>

        <div className={classes.aboutSlide}>
          <div className={classes.slideBox}>
            <img src={analyze} className={classes.active} width={'100%'}/>
            <img src={wireframe} />
            <img src={coding} />
            <img src={motion}/>
          </div>
          <div className={`d-flex flex-column justify-content-end align-items-center fs-4 mx-3 ${classes.navigation}`}>
            <span className="d-flex flex-column align-items-center">
              <FaChevronUp/>
              <div className={`mb-5 ${classes.dashBorder}`}></div>
            </span>
            <span className="d-flex flex-column align-items-center">
              <div className={classes.dashBorder}></div>
              <FaChevronDown/>
            </span>
          </div>
        </div>
      </>


  )
}

export default AboutSlide