import './navmenu.css';

function NavMenu() {
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
          <li>Anasayfa</li>
          <li>Biz Kimiz ?</li>
          <li>Neler Yaparız ?</li>
          <li>Casting</li>
          <li>Cast Akademi</li>
          <li>İletişim</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;
