import React from 'react'

import logo from "../../assets/graycatlight.svg"
import classes from './header.module.css'



const Header = () => {

  return (


   <header className={`d-flex align-items-center`}>

  <div className={`container d-flex justify-content-between align-items-center`}>


      <div className={`${classes.logo}`}>

          <img src={logo} width={"200px"}/>

      </div>

    <nav>

          <ul className="d-flex justify-content-between">
            <li className="ms-5 fs-5">
              about
            </li>
            <li className="ms-5 fs-5">
              contact
            </li>
          </ul>

      </nav>






  </div>









   </header>


  )

}



export default Header