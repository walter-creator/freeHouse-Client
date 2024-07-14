import logo from "../assets/img/logo-ct.png";

function NavHome() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky"
        id="navbar"
      >
        <div className="container">
          <a className="navbar-brand text-uppercase" href="/">
            <img className="logo-light" src={logo} alt="" height="25" />{" "}
            <bold>.FreeHome</bold>
            <img
              className="logo-dark"
              src="images/logo-dark.png"
              alt=""
              height="25"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="mdi mdi-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto" id="navbar-navlist">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Objectif
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#review">
                  Fonctionnalites
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  A propos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-3 mb-lg-0" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <a href="/signIn">
              <button
                type="button"
                className="btn btn-primary nav-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLong"
              >
                Connexion
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavHome;
