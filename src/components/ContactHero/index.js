import React from 'react';

import classes from './contacthero.module.css';

import vinci from '../../assets/images/davinci@2x.png';
import circle from '../../assets/images/contactCircle@2x.png';
import logo from '../../assets/graycatlight.svg';

const ContactHero = () => {
  return(
    <>
      <div className='d-flex justify-content-center'>
        <div className={classes.circleDiv} style={{backgroundImage:`url(${circle})`}}>
          <div className={classes.vinci}>
            <img src={vinci} width={'200px'}/>
            <h2 className={classes.title}>Say Hi!</h2>
          </div>
          <div className={classes.logo}>
            <img src={logo} width={'200px'}/>
            <p className="text-center mt-5">
              Get support with a large platform, flesh out your first MVP,  go from concept to investment,
              or take your startup to the next level. We’re here to support your unique business needs.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactHero