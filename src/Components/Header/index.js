import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './header.css';
import { HiMenuAlt1 } from 'react-icons/hi';

function Header() {
  return (
    <div>
      <div className="container headerBar d-flex justify-content-between align-items-center">
        <h4>RainMedia.</h4>

        <div className="buttonGroup d-flex justify-content-center align-items-center">
          <div className="lang">
            <button className="btn">
              <strong>EN</strong>
            </button>
            <button className="btn">
              <strong>TR</strong>
            </button>
          </div>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <IconContext.Provider value={{ color: 'black', size: '2em' }}>
              <div>
                <HiMenuAlt1 />
              </div>
            </IconContext.Provider>
          </button>
        </div>

        <div
          className="modal fade"
          id="myModal"
          aria-labelledby="exampleModalFullscreenLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container d-flex justify-content-between">
                  <h5>RainMedia.</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
