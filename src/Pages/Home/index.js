import {Link} from "react-router-dom";

import classes from './home.module.css'


import NavMenu from "../../Atoms/NavMenu";

import logo from '../../Assets/images/rain_media_logo-01.svg'
import {FaFacebookF, FaTwitter, FaVimeo} from "react-icons/fa";

function Home() {
  return (

      <div className={`container-fluid bg-dark vh-100`}>


        <div className={`row`}>
          <div className={`col-xl-8 bg-white p-5`}>
            <NavMenu/>
          </div>
          <div className={`col-xl-4 bg-warning text-center d-flex justify-content-center flex-column align-items-center`}>
            <img src={logo} width={300}/>
            <div className={`row g-0 d-flex w-50`}>
              <div className={`col-xl-5 d-flex flex-column g-0 align-items-end`}>
                <a>TR</a>
                <a>EN</a>
              </div>
              <div className={`col-xl-1 d-flex justify-content-center`}>
                <div className={`h-100 bg-dark ${classes.line}`}></div>
              </div>
              <div className={`col-xl-5 d-flex flex-column g-0 align-items-start`}>
                <a><FaTwitter/></a>
                <a><FaFacebookF/></a>
                <a><FaVimeo/></a>
              </div>

            </div>
          </div>

        </div>



      </div>
  );
}

export default Home;
