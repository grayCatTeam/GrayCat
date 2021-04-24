import React from 'react';
import classes from './aboutJobTitle.module.css';

const AboutJobTitle = (props) => {
  return (
    <>
      <div className={classes.wrapper}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className={classes.tags}>
          <span className={classes.tag}>{props.tagOne}</span>
          <span className={classes.tag}>{props.tagTwo}</span>
          <span className={classes.tag}>{props.tagThree}</span>
          <span className={classes.tag}>{props.tagFour}</span>
          <span className={classes.tag}>{props.tagFive}</span>
        </div>
      </div>
    </>
  )
}

export default AboutJobTitle


