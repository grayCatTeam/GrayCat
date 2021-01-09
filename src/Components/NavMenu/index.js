import './navmenu.css';
import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';

function Index() {
  const closeModal = () => {
    // TODO PROPS REF
    const menu = document.getElementById('menu');
    const modal = Modal.getInstance(menu);
    modal.toggle();
  };

  return (
    <div className="container">
      <div className="navHeader d-flex justify-content-between align-items-center">
        <h5>RainMedia.</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>

      <nav className="menu d-flex justify-content-center align-items-center">
        <ul>
          <li>
            <Link to="/" onClick={closeModal}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeModal}>
              About
            </Link>
          </li>
          <li>
            <Link to="/works" onClick={closeModal}>
              Our Works
            </Link>
          </li>
          <li>
            <Link to="/casting" onClick={closeModal}>
              Casting
            </Link>
          </li>
          <li>
            <Link to="/academy" onClick={closeModal}>
              Academy
            </Link>
          </li>
          <li>
            <Link to="/castprofile" onClick={closeModal}>
              Cast Single
            </Link>
          </li>
          <li>
            <Link to="/form" onClick={closeModal}>
              Form
            </Link>
          </li>
          <li>
            <Link to="/product" onClick={closeModal}>
              Product
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeModal}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Index;
