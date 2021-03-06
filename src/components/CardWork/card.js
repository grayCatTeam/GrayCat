import React, { useEffect} from "react"
import classes from './card.module.css'


const Card = (props) => {


return (

<div

  id={`cardComponent`}
  className={`card w-sm-100 
  ${classes.cardStyle}`}>

  <img src={props.image} id={`arda`} className={`${classes.image}`} alt="image" width={props.width}/>
  <div className="card-title text-white fs-2">
    {props.title}
  </div>
  <div id={`yunus`} className="card-text text-white">
    {props.text}
  </div>
  <div id={`mine`} className="card-tags text-dark">
    {props.children}
  </div>

</div>


)


}

export default Card