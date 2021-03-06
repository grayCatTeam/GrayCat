import React, { useEffect,useRef } from "react"

import gsap from "gsap/all"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import classes from './hero.module.css'

import dayi from '../../assets/images/dayi.png'
import rose from '../../assets/images/rose.png'
import medusa from '../../assets/images/medusa.png'
import points from '../../assets/images/points.svg'
import sun from '../../assets/images/sun.png'



const Hero = () => {


  gsap.registerPlugin(ScrollTrigger)

  let aniItem = useRef([])


  let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}})

  useEffect( () => {


    tl.to('#create', {delay:1.3 , y:'0%',duration:1, stagger:0.2})



  },[])





  return (

    <div className={`container ${classes.hero}`}>
      <div className={`row d-flex flex-xl-row flex-md-column-reverse ${classes.heroDiv}`}>

        <div className={`col-xxl-6 col-xl-5`}>
          <div
            ref={el => {aniItem = el}}
            className={`text-light ${classes.heroText}`}>
           <h2>
             <span id="create">We give shape to brand</span>
           </h2>
            <h2 >
              <span id="create">identities and design digital</span>
            </h2>
            <h2>
              <span id="create">experiences to help</span>
            </h2>
            <h2>
              <span id="create">organizations innovate their</span>
            </h2>
            <h2>
              <span id="create">business<p className={"text-danger d-inline"}>.</p></span>
            </h2>
          </div>
        </div>

        <div className={`col-xxl-6 col-xl-7`}>

          <div className={`${classes.imageWrapper} position-relative ms-auto`}>
            <img id="medusa" className={`position-absolute ${classes.medusa}`} src={medusa} width="330" alt="graycat."/>
            <img className={`position-absolute ${classes.dayi}`} src={dayi} alt="graycat."/>
            <img  className={`position-absolute ${classes.rose}`} src={rose} id="rose" alt="graycat."/>
            <img className={`position-absolute ${classes.sun}`} src={sun} alt="graycat."/>
            <img id="points" className={`position-absolute ${classes.points}`} src={points} alt="graycat."/>
          </div>


        </div>

      </div>

    </div>



  )


}


export default Hero