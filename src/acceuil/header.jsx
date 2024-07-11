import '../vendor/bootstrap/css/bootstrap.min.css';
import '../assets/css/templatemo-villa-agency.css'
import '../assets/css/fontawesome.css';
import '../assets/css/flex-slider.css';
import '../assets/css/owl.css';
import '../assets/css/animate.css';

const Header = () => {
  return (
    <div className="menu">
      <div className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <h1>House</h1>
                </a>
                
                <div className="search-bar">
                  <div className="search-item">Anywhere</div>
                  <div className="divider"></div>
                  <div className="search-item">Work</div>
                  <div className="divider"></div>
                  <div className="search-item">Guests</div>
                  <button className="search-button">
                    <img src="../assets/react.svg" alt="Search" />
                  </button>
                </div>
                
                <ul className="nav">
                  <li><a href="#"><i className="fa fa-calendar"></i> My Home</a></li>
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
}

export default Header;
