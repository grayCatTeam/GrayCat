import React from 'react'


import classes from '../style/header.module.css'
import logo from '../assets/images/graycatlight.png'


const Header = () => {

  return (


   <header className={`d-flex align-items-center`}>

  <div className={`container d-flex justify-content-between align-items-center`}>


      <div className={`${classes.logo}`}>

        <img className={`${classes.logo}`} src={logo}/>

      </div>

    {/*<nav>

          <ul className="d-flex justify-content-between">
            <li className="fs-5">
              work
            </li>
            <li className="ms-5 fs-5">
              about
            </li>
            <li className="ms-5 fs-5">
              contact
            </li>
          </ul>

      </nav>*/}






  </div>









   </header>


  )

}



export default Header