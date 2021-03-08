import React, { useEffect,useRef } from "react"
import gsap from "gsap/all"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import grid from '../../assets/images/points@2x.png'
import hero from '../../assets/images/heroSculpture.png'
import rose from '../../assets/images/rose.png'
import dayi from '../../assets/images/dayi.png'
import sun from '../../assets/images/sun.png'

import classes from './hero.module.css'


const IndexHero = () => {


  gsap.registerPlugin(ScrollTrigger)

  let aniItem = useRef([])


  let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}})

  useEffect( () => {


    tl.to('#create', {delay:1.3 , y:'0%',duration:1, stagger:0.2})



  },[])





  return (

    <div className={`container ${classes.hero}`}>

      <div className={`row ${classes.rowWrap}`}>

        <div className={`col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center`}>
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

        <div className={`col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-5 d-flex justify-content-end ${classes.imageColumn}`}>

                <div className={`${classes.imageWrapper}`}>
                  <img className={classes.grid} src={grid} alt={'grid'} width={'100%'}/>
                  <img className={classes.sun} src={sun} alt={'sun'} width={'55%'}/>
                  <img className={classes.sculp} src={hero} alt={'hero'} width={'55%'}/>
                  <img className={classes.rose} src={rose} alt={'rose'} width={'55%'}/>
                  <img className={classes.dayi} src={dayi} alt={'dayi'} width={'25%'}/>
                </div>

        </div>

      </div>

    </div>



  )


}


export default IndexHero