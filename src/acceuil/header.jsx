import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/bootstrap/js/bootstrap.min.js";
import "../assets/css/templatemo-villa-agency.css";
import "../assets/css/fontawesome.css";
import "../assets/css/flex-slider.css";
import "../assets/css/owl.css";
import "../assets/css/animate.css";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getAuthToken = () => {
      const token = localStorage.getItem("token");

      if (token) {
        const decodedToken = jwtDecode(token);

        // Vérifiez si le token a expiré
        if (decodedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          return null;
        }

        return `Bearer ${token.substring(1, token.lastIndexOf('"'))}`;
      }

      return null;
    };
    const token = getAuthToken();
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <div className="menu">
      <div className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="/" className="logo">
                  <h1>FreeHouse</h1>
                </a>
                <ul className="nav">
                  <li>
                    <a href="/">
                      <i className="fa fa-home"></i> Accueil
                    </a>
                  </li>
                  <li>
                    <a href="/publier">
                      <i className="fa fa-pencil-alt"></i> Publier Annonces
                    </a>
                  </li>
                  <li>
                    <a href="/chat">
                      <i className="fa fa-comments"></i> Tchat
                    </a>
                  </li>
                  {/* <li>
                    <a href="/pricing">
                      <i className="fa fa-info-circle"></i> A propos
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <i className="fa fa-envelope"></i> Contact
                    </a>
                  </li> */}
                  {isLoggedIn ? (
                    <>
                      <li>
                        <a href="/profile">
                          <i className="fa fa-user"></i> Mon Profil
                        </a>
                      </li>
                      <li>
                        <a href="/" onClick={() => localStorage.removeItem("token")}>
                          <i className="fa fa-sign-out-alt"></i> Déconnexion
                        </a>
                      </li>
                    </>
                  ) : (
                    <li>
                      <a href="/signIn">
                        <i className="fa fa-sign-in-alt"></i> Connexion
                      </a>
                    </li>
                  )}
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
