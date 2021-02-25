import React from "react"


import classes from '../style/hero.module.css'

import dayi from '../images/dayi.png'
import rose from '../images/rose.png'
import medusa from '../images/medusa.png'
import points from '../images/points.png'
import sun from '../images/sun.png'






const Hero = () => {

  return (

    <div className={`container ${classes.hero}`}>
      <div className={`row d-flex flex-xl-row flex-md-column-reverse`}>

        <div className={`col-xxl-6 col-xl-5`}>
          <p className={`text-light ${classes.heroText}`}>
            We give shape to brand
            identities and design digital
            experiences to help
            organizations innovate their
            business<span className={"text-danger"}>.</span>
          </p>
        </div>

        <div className={`col-xxl-6 col-xl-7`}>

          <div className={`${classes.imageWrapper} position-relative ms-auto`}>
            <img className={`position-absolute ${classes.medusa}`} src={medusa} width="330" alt="graycat."/>
            <img className={`position-absolute ${classes.dayi}`} src={dayi} alt="graycat."/>
            <img className={`position-absolute ${classes.rose}`} src={rose} alt="graycat."/>
            <img className={`position-absolute ${classes.sun}`} src={sun} alt="graycat."/>
            <img className={`position-absolute ${classes.points}`} src={points} alt="graycat."/>
          </div>


        </div>

      </div>

    </div>



  )


}


export default Hero