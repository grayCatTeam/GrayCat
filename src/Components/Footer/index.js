import Title from '../Title';
import './footer.css';
import { FaTwitter, FaInstagram, FaVimeoV, FaFacebookF } from 'react-icons/fa';

function Footer() {
  const clickEvent = (e) => {};

  return (
    <div className="container-fluid wrapper">
      <Title text="RainMedia." />
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
          <FaTwitter />
          <FaInstagram />
          <FaVimeoV />
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
}

export default Footer;
