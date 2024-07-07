import React, { useState } from 'react';
import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import Slideshow from "../components/Slideshow";
import "../assets/css/Slideshow.css";
import "../assets/css/chat.css";
import RecAnonce from "../components/RecAnonce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// import "../assets/js/slideShow.js";
// import images 

import home from "../assets/img/home-decor-1.jpg";

function Details() {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");
    if (n > slides.length) { n = 1 }
    if (n < 1) { n = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
    captionText.innerHTML = dots[n - 1].alt;
    setSlideIndex(n);
  };


  return (
    <>
        <Sidebar a3="active" /> 
        <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
          <Nav titre="Plus de details" input="none"/>
          <div className="row">
            <div className="col-md-8">
              <Slideshow/>
              <div className="row m-5">
                <p>Les reactions des autres utilisateurs pourront vous aidez a prendre une decision 
                  plus eclaire. n'hesitez pas faire un commentaire pour vous exprimez aupres des autres utilisateurs</p>
                  <div className="message">
                    <input type="text" className="message" placeholder="Votre commentaire  ..." />
                    <button> <FontAwesomeIcon   icon={faPaperPlane} /> </button>
                  </div>
                <div className="comments">
                  
                    <div className="row bulle-left f-rigth">
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Odit soluta nulla numquam animi et,
                          a eius dolore, harum totam fugiat iusto esse 
                      </p>
                      <div className="row"> <hr className='m-2'/>
                        <h6 className='text-light'>Sylvie </h6>
                      </div>
                    </div>
                    <div className="row bulle-left f-rigth">
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Odit soluta nulla numquam animi et,
                          a eius dolore, harum totam fugiat iusto esse 
                      </p>
                      <div className="row"> <hr className='m-2'/>
                        <h6 className='text-light'>Moi </h6>
                      </div>
                    </div>
                    <div className="row bulle-left f-rigth">
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Odit soluta nulla numquam animi et,
                          a eius dolore, harum totam fugiat iusto esse 
                      </p>
                      <div className="row"> <hr className='m-2'/>
                        <h6 className='text-light'>Sylvie </h6>
                      </div>
                    </div></div>
                </div>
              </div>
              <div className="col-md-4 mt-1 ">
                <h5> cite le combatant</h5>  
                <p>Chambre</p> 
                <hr className='m-2'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officiis illo libero inventore recusandae iusto excepturi saepe molestias voluptate vel ad!</p>
              <hr className='m-3'/>
              <ul>
                <li>Localisation:  Dschang - Foto</li>
                <li>prix loyer: 15 000/mois</li>
                <li>nombre de piece disponible: 5</li>
              </ul>
            </div>
          </div>
            
           <div className="row">
            <h3> Recommendation</h3>
            <a href="">

            </a>
            
            <RecAnonce className=""
              titre = " Boyom City"
              type= "Chambre"
              desc ="Des gens differents ont des gouts differents, Testez un appartement totalement different et unique"
              img = {home}
            />
            <RecAnonce className=""
              titre = " Boyom City"
              type= "Chambre"
              desc ="Des gens differents ont des gouts differents, Testez un appartement totalement different et unique"
              img = {home}
            />
            <RecAnonce className=""
              titre = " Boyom City"
              type= "appartement"
              desc ="Des gens differents ont des gouts differents, Testez un appartement totalement different et unique"
              img = {home}
            />
           

           </div> <hr />
        </main>
    </>
  )
}

export default Details;
