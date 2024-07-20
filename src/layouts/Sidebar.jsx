/* eslint-disable no-unused-vars */
import '../assets/css/soft-ui-dashboard.css';
import '../assets/css/nucleo-icons.css';
import {  FaGem } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { faFolderPlus, faRocket,faHouseLaptop, faMagnifyingGlassLocation, faComments, faIdCard,faRightToBracket } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Sidebar = ({a1="",a2="",a3="",a4="",a5="",a6="",a7="",a8=""}) => {
  
  a1 = a1+" nav-link"; a2 = a2+" nav-link"; a3 = a3+" nav-link"; a4 = a4+" nav-link";  a5 = a5+" nav-link";
  a6 = a6+" nav-link"; a7 = a7+" nav-link"; a8 = a8+" nav-link"; 
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
    <>
    
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3" id="sidenav-main">
      <div className="sidenav-header"> 
        <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <div className="navbar-brand m-0">
          <span className="ms-1 font-weight-bold">FreeHouse</span>
        </div>
      </div>
      <hr/>
      
      <div className="collapse navbar-collapse w-auto max-height-vh-100 h-100" id="sidenav-collapse-main">
       
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={a1} href="/">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faHouseLaptop} />
                  {/* <FontAwesomeIcon icon={faCoffee}  /> */}
                </div>
                <span className="nav-link-text ms-1">Accueil</span>
            </a>
          </li>
          <li className="nav-item">
            <a className={a2} href="/searchResult">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
                </div>
                <span className="nav-link-text ms-1">Rechercher</span>
            </a>
          </li>
          <li className="nav-item">
            <a className={a4} href='chat' >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faComments} />
              </div>
              <span className="nav-link-text ms-1">Discussion</span>
            </a>
          </li>
          <li className="nav-item">
          <a className={a5} href="/publier">
            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faFolderPlus} />
            </div>
            <span className="nav-link-text ms-1">Publier une annonce </span>
          </a>
        </li>
        <li className="nav-item mt-3">
          <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Pages de compte </h6>
        </li>
        <li className="nav-item">
          <a className={a6} href="/profile">
            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faIdCard} />
            </div>
            <span className="nav-link-text ms-1">Profile</span>
          </a>
        </li>
       {isLoggedIn &&  <li className="nav-item">
          <a className={a7} href="/" onClick={() => localStorage.removeItem("token")}>
            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faRightToBracket} />
            </div>
            <span className="nav-link-text ms-1">Se decconnecter</span>
          </a>
        </li>}
        </ul>
      </div>

    </aside>
    </>
  );
};

export default Sidebar;