import Index from '../NavMenu';
import classes from './header.module.css';

function Header() {
  return (
    <div>
      <nav className={`navbar navbar-light ${classes.lightTransparentBg}`}>
        <div className="container-fluid px-5">
          <a className="navbar-brand text-white" href="/">
            RainMedia.
          </a>
          <div className="d-flex">
            <div className="me-3">
              <button className="btn btn-outline-light bg-transparent border-0">
                EN
              </button>
              <button className="btn btn-outline-light bg-transparent border-0 ms-1">
                TR
              </button>
            </div>

            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#menu"
              className="btn btn-outline-light bg-transparent border-0"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="menu"
        aria-labelledby="menu"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-body p-0">
              <Index />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
