import React from 'react'

import logo from "../../assets/graycatlight.svg"
import classes from './header.module.css'
import { Link } from "gatsby"



const Header = () => {

  return (


   <header className={`d-flex align-items-center`}>

  <div className={`container d-flex justify-content-between align-items-center px-3`}>


      <div className={`${classes.logo}`}>

        <Link to={'/'}>
          <img src={logo} />
        </Link>

      </div>

    <nav>

          <ul className="d-flex justify-content-between">
            <li className={classes.navList}>
              <Link to={'/about'}>About </Link>
            </li>
            <li className={classes.navList}>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>

      </nav>






  </div>









   </header>


  )

}



export default Header