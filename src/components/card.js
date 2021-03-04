import React, { useEffect, useRef } from "react"
import gsap from 'gsap/all'
import classes from '../style/card.module.css'



const Card = (props) => {


  let cardComponent = useRef(null)

  let timeline = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}})


  useEffect(() => {

    timeline.to("#mevsim",{

      duration:2, opacity:0.9,stagger:0.5

    })
    timeline.to("#yunus",{

      duration:2, opacity:0.9,stagger:0.5

    })



  },[])



return (

<div ref={el => (cardComponent = el)} id={`mevsim`} className={`card w-sm-100 ${classes.cardStyle}`}>

  <img src={props.image} id={`arda`} className={`${classes.image}`} alt="image" width={props.width}/>
  <div className="card-title text-white fs-2">
    {props.title}
  </div>
  <div id={`yunus`} className="card-text text-white" style={{opacity:0}}>
    {props.text}
  </div>
  <div id={`mine`} className="card-tags text-dark">
    {props.children}
  </div>

</div>


)


}

export default Card