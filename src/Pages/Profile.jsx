// import React from "react";
import Sidebar from "../layouts/Sidebar";
import "../assets/css/style.css";

import { useEffect, useState } from "react";
import { getAllLogementsByUserId } from "../api";

// images importation
import bruce from "../assets/img/bruce-mars.jpg";
import kal from "../assets/img/kal-visuals-square.jpg";

import Anonce from "../components/AnouncementCard";

function Profile() {
  const [user, setUser] = useState({});
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const user = localStorage.getItem("user");
      setUser(JSON.parse(user));
    };
    getUser();
  }, []);

  useEffect(() => {
    getAllLogementsByUserId(user.id).then((data) => {
      data.forEach((logement) => {
        logement.medias = logement.medias.map((media) => media.lien);
      });
      setLogements(data);
      console.log(data);
    });
  }, [user]);
  return (
    <>
      <Sidebar a6="active" />
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <div className="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
          <nav className="navbar navbar-main navbar-expand-lg bg-transparent shadow-none position-absolute px-4 w-100 z-index-2">
            <div className="container-fluid py-1">
              <nav aria-label="breadcrumb">
                <h6 className="text-white font-weight-bolder ms-2">
                  {" "}
                  Profile{" "}
                </h6>
              </nav>
            </div>
          </nav>

          <div className="container-fluid">
            <div className="page-headers min-height-300 border-radius-xl mt-4"></div>
            <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
              <div className="row gx-4">
                <div className="col-auto">
                  <div className="avatar avatar-xl position-relative">
                    <img
                      src={bruce}
                      alt="profile_image"
                      className="w-100 border-radius-lg shadow-sm"
                    />
                  </div>
                </div>
                <div className="col-auto my-auto">
                  <div className="h-100">
                    <h5 className="mb-1">
                      {user.firstName} {user.lastName}
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
                      <li>
                        Boyom City - <span className="badge">3</span>
                      </li>
                      <li>
                        Cite Blanche -<span className="badge">0</span>
                      </li>
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
                          <i
                            className="fas fa-user-edit text-secondary text-sm"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Edit Profile"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <p className="text-sm">
                      Salut je suis {user.firstName} {user.lastName}, je suis
                      proprietaire dun appartement au centre de ville de
                      Dschang. Si la qualite est ce que vous desirez alors je
                      suis celui que vous rechercher, Vous navez qua consulter
                      lse setablissements que jai mis en ligne pour vous
                      decider.
                    </p>
                    <hr className="horizontal gray-light my-4" />
                    <ul className="list-group">
                      <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                        <strong className="text-dark">Nom:</strong> &nbsp;
                        {user.firstName} {user.lastName}
                      </li>
                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong className="text-dark">Tel:</strong> &nbsp;
                        (+237) {user.tel}
                      </li>
                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong className="text-dark">Email:</strong> &nbsp;
                        {user.email}
                      </li>
                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong className="text-dark">Localisation:</strong>{" "}
                        &nbsp; {user.adresse}
                      </li>
                      <li className="list-group-item border-0 ps-0 pb-0"></li>
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
                          <img
                            src={kal}
                            alt="kal"
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Sophie B.</h6>
                          <p className="mb-0 text-xs">
                            Salut je suis interesse par cette anonce{" "}
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                          href="javascript:;"
                        >
                          Repondre
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="card mb-4">
                  <div className="card-header pb-0 p-3">
                    <h6 className="mb-1">Mes Etablissements</h6>
                    <p className="text-sm">
                      Consulter, modifier ou rendre indisponible les
                      etablissements que vous avez mis en ligne{" "}
                    </p>
                  </div>
                  <div className="card-body p-3">
                    <div className="row">
                      {logements.map((logement, index) => (
                          <Anonce key={index}
                            titre={logement.titre}
                            type={logement.genre}
                            desc={logement.description}
                            img={logement.medias[0]}
                          />
                      ))}
                      <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                        <div className="card h-100 card-plain border">
                          <div className="card-body d-flex flex-column justify-content-center text-center">
                            <a href="/publier">
                              <i className="fa fa-plus text-secondary mb-3"></i>
                              <h5 className="text-secondary">
                                {" "}
                                Ajouter un etablissement{" "}
                              </h5>
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
