import React from 'react'
import {Link} from 'gatsby'
import logo from '../images/graycatlight.png'



const Header = () => {

  return (


    <div className={'container d-flex justify-content-between align-items-center'}>
      <div className={""}>
        <img src={logo} alt={"grayCat."}/>
      </div>
      <div className={"d-flex justify-content-between"}>
        <nav>
          <ul>
            <li>
              <Link to={'#'}>work</Link>
            </li>
            <li>
              <Link to={'#'}>about</Link>
            </li>
            <li>
              <Link to={'#'}>contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>


  )

}



export default Header