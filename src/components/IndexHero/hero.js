import React, { useEffect,useRef } from "react"
import gsap from "gsap/all"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import grid from '../../assets/images/points@2x.png'
import heroImg from '../../assets/images/heroSculpture@2x.png'
import rose from '../../assets/images/rose@2x.png'
import dayi from '../../assets/images/dayi@2x.png'
import sun from '../../assets/images/sun@2x.png'

import classes from './hero.module.css'


const IndexHero = () => {


  gsap.registerPlugin(ScrollTrigger)

  let aniItem = useRef([])


  let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}})

  useEffect( () => {

    tl.to('#create', {delay:1.3 , y:'0%',duration:1, stagger:0.2})

  },[])


  return (

    <div className={`container px-sm-3 px-5 h-100 d-flex align-items-center flex-column justify-content-center ${classes.hero}`}>

      <div className={`row row-cols-1 row-cols-md-2 w-100 ${classes.heroRow}`}>

        <div className={`col d-flex align-items-center ${classes.firstColumn}`}>
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
        <div className={`col d-flex justify-content-center ${classes.secondColumn}`}>
          <div className={`position-relative d-flex justify-content-end`}>
            <img src={grid} className={classes.grid} />
            <img src={sun} className={`position-absolute ${classes.sun}`} />
            <img className={`position-absolute ${classes.dayi}`} src={dayi} />
            <img className={`position-absolute ${classes.heroImg}`} src={heroImg}/>
            <img className={`position-absolute ${classes.rose}`} src={rose} />
          </div>
        </div>


      </div>

    </div>



  )


}


export default IndexHero