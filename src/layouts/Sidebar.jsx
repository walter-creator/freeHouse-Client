import React from 'react';
import logoct from "../assets/img/logo-ct.png";
import '../assets/css/soft-ui-dashboard.css';
import '../assets/css/nucleo-icons.css';
import { FaTimes, FaGem } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus, faHouseLaptop, faMagnifyingGlassLocation, faComments, faIdCard,faRightToBracket } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({a1="",a2="",a3="",a4="",a5="",a6="",a7="",a8=""}) => {
  
  a1 = a1+" nav-link"; a2 = a2+" nav-link"; a3 = a3+" nav-link"; a4 = a4+" nav-link";  a5 = a5+" nav-link";
  a6 = a6+" nav-link"; a7 = a7+" nav-link"; a8 = a8+" nav-link"; 
  return (  
    <>
    
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3" id="sidenav-main">
      <div className="sidenav-header"> 
        <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <div className="navbar-brand m-0">
          <img src={logoct} className="navbar-brand-img h-100" alt="main_logo" />
          <span className="ms-1 font-weight-bold">FreeHouse</span>
        </div>
      </div>
      <hr/>
      
      <div className="collapse navbar-collapse w-auto max-height-vh-100 h-100" id="sidenav-collapse-main">
       
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={a1} href="/home">
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
            <a className={a3} href="/detail">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FaGem className="text-dark text-gradient" />
                </div>
                <span className="nav-link-text ms-1">Details</span>
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
          <a className={a5} href="/">
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
        <li className="nav-item">
          <a className={a7} href="/signIn">
            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faRightToBracket} />
            </div>
            <span className="nav-link-text ms-1">Sign In</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={a8} href="SignUp">
            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              
            </div>
            <span className="nav-link-text ms-1">Sign Up</span>
          </a>
        </li>
        </ul>
      </div>

    </aside>
    </>
  );
};

export default Sidebar;