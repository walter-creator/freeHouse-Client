import React from 'react';
import logoct from "../assets/img/logo-ct.png";
import '../assets/css/soft-ui-dashboard.css';
import '../assets/css/nucleo-icons.css';
import { FaTimes, FaGem } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return ( 
    <div className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3" id="sidenav-main">
      <div className="sidenav-header"> 
        <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <div className="navbar-brand m-0" to="/">
          <img src={logoct} className="navbar-brand-img h-100" alt="main_logo" />
          <span className="ms-1 font-weight-bold">Soft UI Dashboard</span>
        </div>
      </div>
      
      <hr className="horizontal dark mt-0" />

      <div className="collapse navbar-collapse w-auto max-height-vh-100 h-100" id="sidenav-collapse-main">
       
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link" to="/dashboard">
              <span className="nav-link-text ms-1">Dashboard</span>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" to="/tables">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <FaGem className="text-dark text-gradient" />
              </div>
              <span className="nav-link-text ms-1">Tables</span>
            </div>
          </li>
          <li class="nav-item">
          <a class="nav-link  " href="../pages/billing.html">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
             
            </div>
            <span class="nav-link-text ms-1">Billing</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link  " href="../pages/virtual-reality.html">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              
            </div>
            <span class="nav-link-text ms-1">Virtual Reality</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link  " href="../pages/rtl.html">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
             
            </div>
            <span class="nav-link-text ms-1">RTL</span>
          </a>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
        </li>
        <li class="nav-item">
          <a class="nav-link  active" href="../pages/profile.html">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
             
            </div>
            <span class="nav-link-text ms-1">Profile</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link  " href="../pages/sign-in.html">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              
            </div>
            <span class="nav-link-text ms-1">Sign In</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link  " href="../pages/sign-up.html">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              
            </div>
            <span class="nav-link-text ms-1">Sign Up</span>
          </a>
        </li>
        </ul>
      </div>



      <div className="sidenav-footer mx-3">
        <div className="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
          <div className="full-background" style={{ backgroundImage: 'url("../assets/img/curved-images/white-curved.jpeg")' }}></div>
          <div className="card-body text-start p-3 w-100">
            <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
              <FaGem className="ni ni-diamond text-dark text-gradient text-lg top-0" aria-hidden="true" id="sidenavCardIcon" />
            </div>
            <div className="docs-info">
              <h6 className="text-white up mb-0">Need help?</h6>
              <p className="text-xs font-weight-bold">Please check our docs</p>
              <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" target="_blank" rel="noreferrer" className="btn btn-white btn-sm w-100 mb-0">
                Documentation
              </a>
            </div>
          </div>
        </div>
        <a className="btn bg-gradient-primary mt-4 w-100" href="https://www.creative-tim.com/product/soft-ui-dashboard-pro?ref=sidebarfree" type="button">
          Upgrade to pro
        </a>
      </div>
    </div>
  );
};

export default Sidenav;