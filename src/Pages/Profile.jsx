import React from "react";
import Sidebar from '../layouts/Sidebar'; 

import bruce from "../assets/img/bruce-mars.jpg";

function Profile() {
    return (
        <>
            <Sidebar />
            <div className="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
                <nav className="navbar navbar-main navbar-expand-lg bg-transparent shadow-none position-absolute px-4 w-100 z-index-2">
                    <div className="collapse navbar-collapse me-md-0 me-sm-4 mt-sm-0 mt-2" id="navbar">
                        <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                            <div className="input-group">
                                <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
                                <input type="text" className="form-control" placeholder="Type here..." />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="page-header min-height-300 border-radius-xl mt-4">
                        <span className="mask bg-gradient-primary opacity-6"></span>
                    </div>
                    <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
                        <div className="row gx-4">
                            <div className="col-auto">
                                <div className="avatar avatar-xl position-relative">
                                    <img src={bruce} alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                                </div>
                            </div>
                            <div className="col-auto my-auto">
                                <div className="h-100">
                                    <h5 className="mb-1">
                                        Alec Thompson
                                    </h5>
                                    <p className="mb-0 font-weight-bold text-sm">
                                        CEO / Co-Founder
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                <div className="nav-wrapper position-relative end-0">
                                    <ul className="nav nav-pills nav-fill p-1 bg-transparent" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="true">
                                                <span className="ms-1">App</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
                                                <span className="ms-1">Messages</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
                                                <span className="ms-1">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
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
                                    <h6 className="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" checked />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault">Email me when someone follows me</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault1">Email me when someone answers on my post</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault2">Email me when someone mentions me</label>
                                            </div>
                                        </li>
                                    </ul>
                                    <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Application</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault3" />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault3">New launches and projects</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault4" checked />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault4">Monthly product updates</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0 pb-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault5" />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault5">Subscribe to newsletter</label>
                                            </div>
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
                                                <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <p className="text-sm">
                                        Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                                    </p>
                                    <hr className="horizontal gray-light my-4" />
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Location:</strong> &nbsp; USA</li>
                                        <li className="list-group-item border-0 ps-0 pb-0">
                                            <strong className="text-dark text-sm">Social:</strong> &nbsp;
                                            <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                <i className="fab fa-facebook fa-lg"></i>
                                            </a>
                                            <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                <i className="fab fa-twitter fa-lg"></i>
                                            </a>
                                            <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                <i className="fab fa-instagram fa-lg"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="card h-100">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-0">Conversations</h6>
                                </div>
                                <div className="card-body p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/kal-visuals-square.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Sophie B.</h6>
                                                <p className="mb-0 text-xs">Hi! I need more information..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="javascript:;">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/marie.jpg" alt="marie" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Anne Marie</h6>
                                                <p className="mb-0 text-xs">Awesome work, can you..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="javascript:;">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/ivana-square.jpg" alt="ivana" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Ivanna</h6>
                                                <p className="mb-0 text-xs">About files I can..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="javascript:;">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/team-4.jpg" alt="team4" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Peterson</h6>
                                                <p className="mb-0 text-xs">Have a great afternoon..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="javascript:;">Reply</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-1">Projects</h6>
                                    <p className="text-sm">Architects design houses</p>
                                </div>
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="position-relative">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src="../assets/img/home-decor-1.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                    </a>
                                                </div>
                                                <div className="card-body px-1 pb-0">
                                                    <p className="text-gradient text-dark mb-2 text-sm">Project #1</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Modern
                                                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        As Uber works through a huge amount of internal management turmoil.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0">View Project</button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Elena Morison">
                                                                <img alt="Image placeholder" src="../assets/img/team-1.jpg" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Ryan Milly">
                                                                <img alt="Image placeholder" src="../assets/img/team-2.jpg" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Nick Daniel">
                                                                <img alt="Image placeholder" src="../assets/img/team-3.jpg" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Peterson">
                                                                <img alt="Image placeholder" src="../assets/img/team-4.jpg" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="position-relative">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src="../assets/img/home-decor-2.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                                                    </a>
                                                </div>
                                                <div className="card-body px-1 pb-0">
                                                    <p className="text-gradient text-dark mb-2 text-sm">Project #2</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Scandinavian
                                                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        Music is something that every person has his or her own specific opinion about.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0">View Project</button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Elena Morison">
                                                                <img alt="Image placeholder" src="../assets/img/team-1.jpg" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Ryan Milly">
                                                                <img alt="Image placeholder" src="../assets/img/team-2.jpg" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Nick Daniel">
                                                                <img alt="Image placeholder" src="../assets/img/team-3.jpg" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Peterson">
                                                                <img alt="Image placeholder" src="../assets/img/team-4.jpg" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="position-relative">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src="../assets/img/home-decor-3.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                                                    </a>
                                                </div>
                                                <div className="card-body px-1 pb-0">
                                                    <p className="text-gradient text-dark mb-2 text-sm">Project #3</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Minimalist
                                                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        Different people have different taste, and various types of music.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button" className="btn btn-outline-primary btn-sm mb-0">View Project</button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Elena Morison">
                                                                <img alt="Image placeholder" src="../assets/img/team-1.jpg" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Ryan Milly">
                                                                <img alt="Image placeholder" src="../assets/img/team-2.jpg" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Nick Daniel">
                                                                <img alt="Image placeholder" src="../assets/img/team-3.jpg" />
                                                            </a>
                                                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Peterson">
                                                                <img alt="Image placeholder" src="../assets/img/team-4.jpg" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   
                                        <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                          <div class="card h-100 card-plain border">
                                            <div class="card-body d-flex flex-column justify-content-center text-center">
                                              <a href="javascript:;">
                                                <i class="fa fa-plus text-secondary mb-3"></i>
                                                <h5 class=" text-secondary"> New project </h5>
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
        </>
    );
}

export default Profile;
