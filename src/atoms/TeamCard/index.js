import React from 'react'
import * as classes from './teamCard.module.css'




const TeamCard = (props) => {

    return(
      <div className={classes.team}>
        <div className={classes.img}>
          <img src = {props.img}/>

        </div>

        <div className={classes.name}>
          <span>
          <h3>{props.name}</h3>
          <p> {props.title}</p>
          </span>
        </div>



      </div>
      
  
    )
  }
  
  export default TeamCard