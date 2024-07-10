import React from "react";
import Sidebar from '../layouts/Sidebar'; 
import "../assets/css/style.css";

// images importation
import bruce from "../assets/img/bruce-mars.jpg";
import kal from "../assets/img/kal-visuals-square.jpg"
import decor from "../assets/img/home-decor-3.jpg";

import Anonce from "../components/AnouncementCard";

function Profile() {
    return (
    <>
      <Sidebar a6="active"/>
      <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <div className="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
      
          <nav className="navbar navbar-main navbar-expand-lg bg-transparent shadow-none position-absolute px-4 w-100 z-index-2">
            <div className="container-fluid py-1">
              <nav aria-label="breadcrumb">

                <h6 className="text-white font-weight-bolder ms-2"> Profile  </h6>
              </nav>
            </div>
          </nav>
      
          <div className="container-fluid">
            <div className="page-headers min-height-300 border-radius-xl mt-4">
            </div>
            <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
            <div className="row gx-4">
              <div className="col-auto">
                <div className="avatar avatar-xl position-relative">
                  <img src={bruce} alt="profile_image" className="w-100 border-radius-lg shadow-sm"/>
                </div>
              </div>
              <div className="col-auto my-auto">
                <div className="h-100">
                  <h5 className="mb-1">
                    Kengne Donald
                  </h5>
                </div>
              </div>
            
            </div>
            </div>
          </div>

          <div className="container-fluid py-4">
                <div className="row">
                  <div className="col-12 col-xl-4">
                    <div className="card h-100">
                      <div className="card-header pb-0 p-3">
                        <h6 className="mb-0">Mes Favoris </h6>
                      </div>
                      <div className="card-body p-3">
                        
                          <ul className="list-group">
                            <li>Boyom City    -  <span className="badge">3</span></li>
                            <li>Cite Blanche  -<span className="badge">0</span></li>
                          </ul>
                        
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="card h-100">
                      <div className="card-header pb-0 p-3">
                        <div className="row">
                          <div className="col-md-8 d-flex align-items-center">
                            <h6 className="mb-0">Profile Information</h6>
                          </div>
                          <div className="col-md-4 text-end">
                            <a href="javascript:;">
                              <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-3">
                        <p className="text-sm">
                          Salut je suis kengne Donald, je suis proprietaire d'un appartement au centre de ville de Dschang. Si la qualite est ce que vous desirez alors je suis celui que vous rechercher, Vous n'avez qu'a consulter lse setablissements que j'ai mis en ligne pour vous decider.
                        </p>
                        <hr className="horizontal gray-light my-4"/>
                        <ul className="list-group">
                          <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Nom:</strong> &nbsp; Alec M. Thompson</li>
                          <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Tel:</strong> &nbsp; (+237) 685 47 98 25</li>
                          <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                          <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Localisation:</strong> &nbsp; Dschang - Foto</li>
                          <li className="list-group-item border-0 ps-0 pb-0">
                          </li> 
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="card h-100">
                      <div className="card-header pb-0 p-3">
                        <h6 className="mb-0">Conversations recente </h6>
                      </div>

                      <div className="card-body p-3">
                        <ul className="list-group">
                          <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                            <div className="avatar me-3">
                              <img src={kal} alt="kal" className="border-radius-lg shadow"/>
                            </div>
                            <div className="d-flex align-items-start flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Sophie B.</h6>
                              <p className="mb-0 text-xs">Salut je suis interesse par cette anonce </p>
                            </div>
                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="javascript:;">Repondre</a>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="card mb-4">
                      <div className="card-header pb-0 p-3">
                        <h6 className="mb-1">Mes Etablissements</h6>
                        <p className="text-sm">Consulter, modifier ou rendre indisponible les etablissements que vous avez mis en ligne </p>
                      </div>
                      <div className="card-body p-3">
                        <div className="row">

                          <Anonce
                          titre = " Boyom City"
                          type= "Chambre"
                          desc ="Des gens differents ont des gouts differents, Testez un appartement totalement different et unique"
                          img = {decor}
                          />
                          <Anonce
                          titre = "Kengne Jean Bernard"
                          type= "Service"
                          desc ="Contactez moi pour tous vos problemes de plomberie, je suis la solution"
                          img = {decor}
                          />

                          <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                            <div className="card h-100 card-plain border">
                              <div className="card-body d-flex flex-column justify-content-center text-center">
                                <a href="index.html">
                                  <i className="fa fa-plus text-secondary mb-3"></i>
                                  <h5 className="text-secondary"> Ajouter un etablissement  </h5>
                                </a>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
          </div>
         </div> 
       </main>
  
    </>
    );
}

export default Profile;
