import React from "react"
import classes from "./aboutHero.module.css"
import arrowDown from "../../assets/icons/arrowDown.svg"


const AboutHero = () => {

  return (

    <div className={`container ${classes.aboutHero}`}>

      <div className={`row d-flex align-items-center h-100`}>
        <div className={`col-xl-6 col-md-12 h-100 d-flex align-items-center`}>
          <div className="position-relative">
            <h3 className={`${classes.subHeading}`}>OUR</h3>
            <span className={`${classes.headLine}`}></span>
            <h2 className={`${classes.heading}`}>Teams</h2>
          </div>
        </div>
        <div className={`col-xl-6 col-md-12 h-100 d-flex justify-content-end align-items-center`}>
          <h3 className={`${classes.textHero}`}>" We believe team work
            makes the dream works. "</h3>
        </div>
      </div>
      <div className="text-center">
        <img className={classes.arrowDown} src={arrowDown} width={"20px"}/>
      </div>

    </div>


  )


}

export default AboutHero