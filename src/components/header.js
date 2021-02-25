import React from 'react'

import Layout from './layout'
import classes from '../style/header.module.css'

import logo from '../assets/images/graycatlight.png'


const Header = () => {

  return (


   <header className={'container d-flex justify-content-between align-items-center'}>



     <div className={'logo'}>
        <img src={logo} width="150"/>
     </div>


     <div className={'navbar'}>
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
     </div>







   </header>


  )

}



export default Header