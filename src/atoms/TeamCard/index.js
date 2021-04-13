import React from 'react'
import classes from './teamCard.module.css'
import { Link } from "gatsby"

const TeamCard = (props) => {

    return(
  
      <div className={`card container ${classes.image}`}>
        <div className="row">
          <div className="col-xl-2 col-lg-4">
            <div className="card-img p-4">
              <img src={props.image} alt={''} width={'50%'}/>
            </div>
          </div>
          <div className="col-xl-6 col-lg-1 d-flex align-items-center">
            <div className="card-body p-3 ">
              <div className="card-title pt-3 pb-2">
                <h3>{props.companyName}</h3>
              </div>
              <div className="card-text pb-3">
                <p style={{color:'#534f4f'}}>
                  {props.children}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
  
    )
  }
  
  export default TeamCard