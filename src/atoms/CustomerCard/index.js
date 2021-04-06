import React from 'react'

import classes from './customerCard.module.css'

import bleu from '../../assets/svg/bleu.svg'
import { Link } from "gatsby"


const CustomerCard = (props) => {

  return(

    <div className={`card container ${classes.cardWrap}`}>
      <div className="row">
        <div className="col-xl-6 col-lg-12">
          <div className="card-img p-4">
            <img src={bleu} alt={'appitr'} width={'100%'}/>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 d-flex align-items-center">
          <div className="card-body p-3 ">
            <div className="card-title pt-3 pb-2">
              <h3>{props.companyName}</h3>
            </div>
            <div className="card-text pb-3">
              <p style={{color:'#534f4f'}}>
                {props.children}
              </p>
              <Link to={'/#'} style={{color:"white"}}>
                More Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CustomerCard