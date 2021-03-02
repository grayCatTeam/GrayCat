import React, { useEffect, useRef } from "react"
import gsap from 'gsap/all'
import classes from '../style/card.module.css'



const Card = (props) => {


  let cardComponent = useRef(null)


  useEffect(() => {



  },[])



return (

<div ref={el => (cardComponent = el)} className={`card w-sm-100 ${classes.cardStyle}`}>

  <img src={props.image} className={`${classes.image}`} alt="image" width={props.width}/>
  <div className="card-title text-white fs-2">
    {props.title}
  </div>
  <div className="card-text text-white">
    {props.text}
  </div>
  <div className="card-tags text-dark">
    {props.children}
  </div>

</div>


)


}

export default Card