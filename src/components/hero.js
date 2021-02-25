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
      <div className={"row"}>

        <div className={`col-xl-6`}>
          <p className={`text-light ${classes.heroText}`}>
            We give shape to brand
            identities and design digital
            experiences to help
            organizations innovate their
            business<span className={"text-danger"}>.</span>
          </p>
        </div>

        <div className={`col-xl-6`}>

          <div className={`${classes.imageWrapper} position-relative`}>
            <img className={`position-absolute ${classes.medusa}`} src={medusa} width="330"/>
            <img className={`position-absolute ${classes.dayi}`} src={dayi}/>
            <img className={`position-absolute ${classes.rose}`} src={rose}/>
            <img className={`position-absolute ${classes.sun}`} src={sun}/>
            <img className={`position-absolute ${classes.points}`} src={points}/>
          </div>


        </div>

      </div>

    </div>



  )


}


export default Hero