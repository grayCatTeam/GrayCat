import React from 'react';

import classes from './contacthero.module.css';

import vinci from '../../assets/images/davinci@2x.png';
import circle from '../../assets/images/contactCircle@2x.png';
import logo from '../../assets/graycatlight.svg';

const ContactHero = () => {
  return(
    <>
      <div className={classes.wrapper}>
        <img src={circle} className={classes.circle}/>
        <span className={classes.vinci}>
          <img src={vinci}/>
          <h1 className={classes.title}>Say Hi!</h1>
        </span>
        <img src={logo} className={classes.logo}/>
        <span className={classes.text}>
          Get support with a large platform, flesh out your first MVP,  go from concept to investment, or take your startup to the next level. We’re here to support your unique business needs.
        </span>
      </div>
    </>
  )
}

export default ContactHero