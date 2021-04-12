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
            </div>
          </div>
          <div className={`col-xl-6 col-md-12 d-xl-flex justify-content-end flex-column align-items-end`}>


            <div className={classes.socialLinks}>

              <IconContext.Provider value={{size:20, color:'#534F4F'}}>
                <a href={"#"}><FaInstagram/></a>
                <a href={`https://dribbble.com/graycatstudio`} target={`_blank`} rel="noreferrer" className="ms-4"><FaDribbble/></a>
                <a href={`https://www.behance.net/graycatstudio`} target={`_blank`} rel="noreferrer" className="ms-4"><FaBehance/></a>
                <a href={`https://codepen.io/graycatstudio`} target="_blank" rel="noreferrer" className="ms-4"><FaCodepen/></a>
                <a href={`https://www.linkedin.com/company/likeacat/`} target="_blank"  rel="noreferrer" className="ms-4"><FaLinkedin/></a>
              </IconContext.Provider>
            </div>


            <p style={{color: '#534F4F', fontSize:'14px' , bottom:0}}>© 2019 graycat. All Rights Reserved.</p>
          </div>
        </div>
      </div>

    </footer>

  )


}

export default Footer