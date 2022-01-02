import React from "react"
import * as classes from "./aboutHero.module.css"
import arrowDown from "../../assets/icons/arrowDown.svg"


const AboutHero = () => {

  return (
      <>
        <div className={classes.aboutHero}>

              <div className={classes.textHero}>
                <h1>We Craft Experiences</h1>
                <p>
                  We are a remote design agency based in Istanbul,
                  working with clients around the world. As
                  passionate designers, we love building products
                  that are easy to use, accessible, engaging, and delightful.
                </p>
              </div>
          <div className="text-center">
            <img className={classes.arrowDown} src={arrowDown} width={"20px"}/>

          </div>
          </div>

      </>


  )
}

export default AboutHero