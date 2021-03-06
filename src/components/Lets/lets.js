import React from "react"


import classes from './lets.module.css'
import geometric from '../../assets/images/geometric.png'


const Lets = () => {

  return(

    <section className="container d-flex vh-100 align-items-center">
      <div className={`row d-sm-flex position-relative`}>
        <img className={`${classes.geometric}`} src={geometric} alt={"geometric"}/>
        <div className={`col-xl-6 d-flex align-items-center`}>
          <div className={`card ${classes.letsCard} p-5`}>
            <div className={`card-title fs-1`}>
              Let's Think Together Your Idea
            </div>
            <div className={`card-text ${classes.letsText}`}>
              We are listen you and make prototyping and analyze
              your project idea. After design and software
              All process We will be with you.
            </div>
            <div>
              <button className="btn btn-primary mt-3">Let's Contact</button>
            </div>
          </div>
        </div>
        <div className={`col-xl-6 d-flex justify-content-end`}>

        </div>
      </div>




    </section>

  )


}

export default Lets