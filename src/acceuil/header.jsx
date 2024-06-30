import '../vendor/bootstrap/css/bootstrap.min.css';
import '../assets/css/templatemo-villa-agency.css'
import '../assets/css/fontawesome.css';
import '../assets/css/flex-slider.css';
import '../assets/css/owl.css';
import '../assets/css/animate.css';

const Header = () => {
  return (
    <div className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <h1>House</h1>
                </a>
                <ul className="nav">
                  <li><a href="index.html" className="active">Home</a></li>
                  <li><a href="properties.html">Properties</a></li>
                  <li><a href="property-details.html">Property Details</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
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
  );
}

export default Header;
