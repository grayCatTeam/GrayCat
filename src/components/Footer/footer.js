import React from 'react'


import { Link } from "gatsby"
import { FaBehance, FaCodepen, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa"

import logo from "../../assets/graycatlight.svg"
import classes from "./footer.module.css"
import { IconContext } from "react-icons"



const Footer = () => {

  return (

    <footer className={classes.footer}>
      <div className={`container`}>
        <div className={`row p-5`}>
          <div className={`col-xl-6 col-md-12 text-xl-start text-md-center`}>
            <img src={logo} alt={"logo"} width={150}/>
            <div className={classes.links}>
              <Link to={'/privacy'}>Privacy</Link>
              <span>/</span>
              <Link to={'/faq'}>FAQ</Link>
            </div>
            <div className={classes.address}>
              <p className="fs-6">Abbasaga / Besiktas 34364 Istanbul</p>
              <a href="mailto:graycatcoo@gmail.com">info@graycat.co</a>
            </div>
          </div>
          <div className={`col-xl-6 col-md-12 d-xl-flex justify-content-end flex-column align-items-end`}>
            <p style={{color: '#534F4F', fontSize:'14px' , bottom:0}}>© 2019 graycat. All Rights Reserved.</p>
          </div>
        </div>
      </div>

    </footer>

  )


}

export default Footer