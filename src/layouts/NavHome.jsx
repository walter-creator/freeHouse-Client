import logo from "../assets/img/logo-ct.png";

function NavHome(){
    return (
        <>
         <nav class="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky" id="navbar">
            <div class="container">
                
                <a class="navbar-brand text-uppercase" href="index-1.html">
                    <img class="logo-light" src={logo} alt="" height="25"/> <bold>.FreeHome</bold> 
                    <img class="logo-dark" src="images/logo-dark.png" alt="" height="25"/>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="mdi mdi-menu"></span>
                    
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mx-auto" id="navbar-navlist">
                        <li class="nav-item">
                            <a class="nav-link active" href="#home">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#features">Objectif</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#review">Fonctionnalites</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#pricing">A propos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-3 mb-lg-0" href="#contact">Contact</a>
                        </li>
                    </ul>
                    
                    <button type="button" class="btn btn-primary nav-btn" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
                        Connexion
                    </button>
                    
                </div>
            </div>
        </nav>

        </>
    )
}
export default NavHome;