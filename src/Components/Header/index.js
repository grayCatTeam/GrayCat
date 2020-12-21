import { IconContext } from 'react-icons';
import './header.css';
import { HiMenuAlt1 } from 'react-icons/hi';
import NavMenu from '../NavMenu/navMenu';

function Header() {
  return (
    <div className="container-fluid">
      <div className="headerBar d-flex justify-content-between align-items-center">
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
                <NavMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
