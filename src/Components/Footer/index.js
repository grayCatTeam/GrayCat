import './footer.css';
import {FaTwitter, FaInstagram, FaVimeoV, FaFacebookF} from 'react-icons/fa';
import RainTitle from '../../../src.old/Assets/images/footerTitle.svg';

function Footer() {


  return (
    <div className="wrapper">
      <div className="footerTitle d-flex justify-content-center mt-5 mb-5">
        <img src={RainTitle} alt="logotitle"/>
      </div>
      <div className="container addressContainer">
        <div className="row">
          <div className="col-md-6">
            <div className="addressBox leftAddress">
              <div className="addressBerlin">
                <h5>Berlin</h5>
                <p>8 rue Jules Vales</p>
                <p>75011 Istanbul</p>
                <p>+33 656 32 32</p>
              </div>
              <div className="footerMail">
                <h6>Mail</h6>
                <p>job@rainmedya.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="addressBox">
              <div className="addressIstanbul">
                <h5>Istanbul</h5>
                <p>8 rue Jules Vales</p>
                <p>75011 Istanbul</p>
                <p>+33 656 32 32</p>
              </div>
              <div className="footerMail">
                <h6>Job</h6>
                <p>rainmedia@rainmedya.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="socialWrapper">
        <div className="socialTitle">
          <h6>Social Media</h6>
        </div>
        <div className="socialIcon">
          <FaTwitter/>
          <FaInstagram/>
          <FaVimeoV/>
          <FaFacebookF/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
