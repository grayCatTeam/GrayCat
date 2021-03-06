import React from 'react'

import logo from "../../assets/images/graycatlight.png"
import classes from "./footer.module.css"



const Footer = () => {

  return (

    <footer style={{minHeight:'300px'}}>
      <div className={`container`}>

        <div className={`row py-5 d-flex flex-wrap`}>
          <div className={`col-xl-3  ${classes.contact}`}>
            <div className={` mb-4 text-center`}>
              <img src={logo} width={"50%"}/>
            </div>
            <div className={`text-center`}>
              <p className={`text-center`}>Abbasaga / Besiktas</p>
              <p className={`text-center`}>Istanbul</p>
              <a className={'text-white text-center'} href={'mailto:info@graycat.co'}>info@graycat.co</a>
            </div>
          </div>

          <div className={`col-xl-3 ps-5  ${classes.column}`}>
            <h3 className={`${classes.subHeading} fs-4`}>Social</h3>
            <ul>
              <li><a className={`text-white`} href={"https://www.linkedin.com/company/likeacat"} target={"_blank"}>Linkedin</a></li>
              <li><a className={`text-white`} href={"https://dribbble.com/graycatstudio"} target={"_blank"}>Dribble</a></li>
              <li><a className={`text-white`} href={"https://www.behance.net/graycatstudio"} target={"_blank"}>Behance</a></li>
              <li><a className={`text-white`} href={"https://codepen.io/graycatstudio"} target={"_blank"}>CodePen</a></li>
            </ul>
          </div>

          <div className={`col-xl-3 ps-5 md-my-4 ${classes.column}`}>

              <h3 className={`${classes.subHeading} fs-4`}>Partners</h3>

            <ul>
              <li><a className={`text-white`} href={"https://ads.google.com/aw/campaigns/new/express?campaignId=10580265964&ocid=530083575&subid=tr-tr-ha-aw-sk-c-bau%21o3~Cj0KCQiA4feBBhC9ARIsABp_nbVpNOdMWWxEsTdqs-JHdA0Y8f4zGPI0J1QoY9JU1FhA9sIKlsmJ094aAul0EALw_wcB~11226936979&step=crev&euid=422696844&__u=2735040556&uscid=530083575&__c=3681330175&authuser=0&sourceid=emp"} target={"_blank"}>Google</a></li>
              <li><a className={`text-white`} href={"https://www.shopify.com/"} target={"_blank"}>Shopify</a></li>
              <li><a className={`text-white`} href={"https://www.iyzico.com/"} target={"_blank"}>Iyzico</a></li>
              <li><a className={`text-white`} href={"https://codepen.io/graycatstudio"} target={"_blank"}>CodePen</a></li>
            </ul>
          </div>

          <div className={`col-xl-3 ps-5 md-my-4 ${classes.column}`}>
            <h3 className={`${classes.subHeading} fs-4`}>Support</h3>
            <ul>
              <li><a className={`text-white`} href={"https://www.shopify.com/"} target={"_blank"}>FAQ</a></li>
              <li><a className={`text-white`} href={"https://www.iyzico.com/"} target={"_blank"}>GrayCat Team</a></li>
            </ul>
          </div>
        </div>

        <div className={`pt-5 mt-5 pb-4 text-center`}>
          <p>copyrigt @2020 by <a className={'text-white'} href={'https://graycat.co'}>grayCat</a></p>
        </div>
      </div>
    </footer>

  )


}

export default Footer