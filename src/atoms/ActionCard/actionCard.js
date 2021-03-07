import React from "react"
import {Link} from 'gatsby'

import Button from '../Button/button'

import classes from './actionCard.module.css'

import cat from '../../assets/images/cat.png'
import vertigo from '../../assets/images/vertigo.png'

const ActionCard = () => {
  return(
    <div className={`container border-5 border-danger ${classes.actionWrapper}`}>
      <div className={`${classes.actionText}`}>

        <div className={classes.textWrap}>
          <h3>Let's Collabrate</h3>
          <p>
            Get support with a large platform,
            flesh out your first MVP,
            go from concept to investment,
            or take your startup to the next level.
            We’re here to support your unique business needs.
          </p>
          <Link>Lets Collabrate</Link>
        </div>
      </div>
      <div className={`${classes.actionImage}`}>
        <div className={`${classes.imageWrap}`}>

            <img src={cat} className={classes.cat}/>
          <img src={vertigo} className={classes.vertigo}/>
        </div>
      </div>
    </div>
  )
}


export default ActionCard