import React from "react";
import "../assets/homeCss/aos.css"
import "../assets/homeCss/style.css";
import "../assets/lib/lightbox/css/lightbox.min.css";
import NavHome from "../layouts/NavHome";
import SectionHome from "../components/SectionHome";
import TeamCard from "../components/TeamCard";
// import images 
import marie from "../assets/img/marie.jpg";
import home from "../assets/img/home-decor-1.jpg";
import home2 from "../assets/img/home-decor-2.jpg";
import home3 from "../assets/img/home-decor-3.jpg";
import SectionTeam from "../components/SectionTeam";
import SectionFooter from "../components/SectionFooter";




function Home() {

  return (
    <> 
    <NavHome/>
    <div className="overflow-hidden-x">
        <SectionHome/>
        <div className="container-fluid">
          <div className="row">
            <div className="home-shape-arrow">
              <a href="#features" className="mouse-down"><i className="mdi mdi-arrow-down arrow-icon text-dark h5"></i></a>
            </div>
          </div>
        </div>
        <SectionTeam/>
        <SectionFooter/>
    </div>
        
    </>
  )
}

export default Home;