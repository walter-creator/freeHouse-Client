
function SignNav() {

  return (
    <div className="container position-sticky z-index-sticky top-0">
            <div className="row">
                <div className="col-12">
                    
                    <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                        <div className="container-fluid">
                            <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
                            FreeHouse
                            </a>
                            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon mt-2">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navigation">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link me-2" href="/">
                                        <i className="fa fa-user opacity-6 text-dark me-1"></i>
                                        Accueil
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link me-2" href="SignUp">
                                        <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                        Sign Up
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link me-2" href="signIn">
                                        <i className="fas fa-key opacity-6 text-dark me-1"></i>
                                        Sign In
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav d-lg-block d-none">
                                <li className="nav-item">
                                <a href="#" className="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark">Rejoignez nous</a>
                                </li>
                            </ul>
                            </div>
                        </div>  
                    </nav>
                    
                </div>
            </div>
       </div>
  )
}

export default SignNav;