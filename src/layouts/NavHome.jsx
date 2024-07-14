import logo from "../assets/img/logo-ct.png";
import { useState, useEffect } from "react";
import {jwtDecode} from 'jwt-decode';

function NavHome() {
  // Remplace ceci par la logique réelle pour vérifier si l'utilisateur est connecté
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getAuthToken = () => {
      const token = localStorage.getItem('token');
  
      if (token) {
          const decodedToken = jwtDecode(token);
  
          // Vérifiez si le token a expiré
          if (decodedToken.exp * 1000 < Date.now()) {
              localStorage.removeItem('token');
              return null;
          }
  
          return `Bearer ${token.substring(1, token.lastIndexOf('"'))}`;
      }
  
      return null;
  };
  const token = getAuthToken();
  if (token) {
      setIsLoggedIn(true);
  }else{
      setIsLoggedIn(false);
  }
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky"
        id="navbar"
      >
        <div className="container">
          <a className="navbar-brand text-uppercase" href="/">
            <img className="logo-light" src={logo} alt="" height="25" />{" "}
            <bold>FreeHome</bold>
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
                <a className="nav-link active" href="/">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/publier">
                  Publier Annonces
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/chat">
                  Tchat
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

            {isLoggedIn ? (
              <div className="btn-group ms-3">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profil
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="/profile">
                      Mon Profil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/logout">
                      Déconnexion
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavHome;