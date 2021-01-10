import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';
import classes from './navmenu.module.css';

function NavMenu() {
  const closeModal = () => {
    const menu = document.getElementById('menu');
    const modal = Modal.getInstance(menu);
    modal.toggle();
  };

  return (
    <div className="container-fluid h-100">
      <nav className="navbar navbar-light">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="/">
            RainMedia.
          </a>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-outline-dark bg-transparent border-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <nav
        className={`${classes.menu} nav flex-column justify-content-center align-items-center`}
      >
        <ul>
          <li className="nav-item">
            <Link to="/" onClick={closeModal}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={closeModal}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/works" onClick={closeModal}>
              Our Works
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/casting" onClick={closeModal}>
              Casting
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/academy" onClick={closeModal}>
              Academy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cast-profile" onClick={closeModal}>
              Cast Single
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/form" onClick={closeModal}>
              Form
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product" onClick={closeModal}>
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={closeModal}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;
