
import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import "../assets/css/chat.css";

//images 
import marie from "../assets/img/marie.jpg";
import home from "../assets/img/home-decor-1.jpg";
import home2 from "../assets/img/home-decor-2.jpg";
import home3 from "../assets/img/home-decor-3.jpg";

function Details() {

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    } 

  return (
    <>
      <Sidebar a3="active" /> 
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Nav titre="Plus de details" input="none"/>
        
        {/** Inserons ici le block principale  */}
        {/* <div className="container">
                <div className="mySlides">
                    <div className="numbertext">1 / 6</div>
                    <img src={decor} />
                </div>

                <div className="mySlides">
                    <div className="numbertext">2 / 6</div>
                    <img src={decor2} />
                </div>

                <div className={decor3}>
                    <div className="numbertext">3 / 6</div>
                    <img src={decor} />
                </div>
                
                <div className="mySlides">
                    <div className="numbertext">4 / 6</div>
                    <img src={decor2} />
                </div>

                <div className="mySlides">
                    <div className="numbertext">5 / 6</div>
                    <img src={decor3} />
                </div>
                
                <div className="mySlides">
                    <div className="numbertext">6 / 6</div>
                    <img src={decor} />
                </div>
            
                <a className="prev" onclick={plusSlides(-1)}>❮</a>
                <a className="next" onclick={plusSlides(1)}>❯</a>

                <div className="caption-container">
                    <p id="caption"></p>
                </div>
        
                <div className="row">
                    <div className="column">
                        <img className="demo cursor" src={decor} style="width:100%" onclick={currentSlide(1)} alt="The Woods"/>
                    </div>
                    <div className="column">
                        <img className="demo cursor" src={decor} style="width:100%" onclick={currentSlide(2)} alt="Cinque Terre"/>
                    </div>
                    <div className="column">
                        <img className="demo cursor" src={decor} style="width:100%" onclick={currentSlide(3)} alt="Mountains and fjords"/>
                    </div>
                    <div className="column">
                        <img className="demo cursor" src={decor} style="width:100%" onclick={currentSlide(4)} alt="Northern Lights"/>
                    </div>
                    <div className="column">
                        <img className="demo cursor" src={decor} style="width:100%" onclick={currentSlide(5)} alt="Nature and sunrise"/>
                    </div>    
                    <div className="column">
                        <img className="demo cursor" src={decor} style="width:100%" onclick={currentSlide(6)} alt="Snowy Mountains"/>
                    </div>
                </div>
        </div> */}
            
        </main>
    </>
  )
}

export default Details;
