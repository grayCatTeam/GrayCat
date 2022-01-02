import React from 'react';
import * as classes from './contactfooter.module.css';
import logo from '../../assets/images/graycatlight.png';
import { IconContext } from "react-icons";
import { FaBehance, FaCodepen, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactFooter = () => {

  return(
    <>
      <div>
        <div className={classes.addressBox}>
        <img src={logo} width={150}/>
        <p>Nurtanesi street 57 34453</p>
        <p>Besiktas / Istanbul</p>
        <p>Turkey</p>
      </div>
      </div>
      <div className={classes.downBar}>
        <p>Privacy Contract / FAQ</p>

        <div className={classes.socialLinks}>

          <IconContext.Provider value={{size:20, color:'#534F4F'}}>
            <a href={"#"}><FaInstagram/></a>
            <a href={`https://dribbble.com/graycatstudio`} target={`_blank`} rel="noreferrer" className="ms-4"><FaDribbble/></a>
            <a href={`https://www.behance.net/graycatstudio`} target={`_blank`} rel="noreferrer" className="ms-4"><FaBehance/></a>
            <a href={`https://codepen.io/graycatstudio`} target="_blank" rel="noreferrer" className="ms-4"><FaCodepen/></a>
            <a href={`https://www.linkedin.com/company/likeacat/`} target="_blank"  rel="noreferrer" className="ms-4"><FaLinkedin/></a>
          </IconContext.Provider>
        </div>
      </div>
    </>
  )

}
export default ContactFooter