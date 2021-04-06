import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import wireframe from "../../assets/images/wireframe@2x.png";
import analyze from "../../assets/images/analyze@2x.png";
import coding from "../../assets/images/coding@2x.png";
import motion from "../../assets/images/motion@2x.png"


import classes from './aboutSlide.module.css';

const AboutSlide = () => {

  return(
      <>
        <div className={classes.aboutSlide}>
          <div className={classes.slideBox}>
            <Carousel interval={5000}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={analyze}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src= {wireframe}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src= {coding}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src= {motion}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

      </>


  )
}

export default AboutSlide