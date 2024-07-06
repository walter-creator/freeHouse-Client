
import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import Slideshow from "../components/Slideshow";



function Details() {

  return (
    <>
        <Sidebar a3="active" /> 
        <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
          <Nav titre="Plus de details" input="none"/>
            
            <div className="container">
              
              <div className="mySlides">
                <div className="numbertext">1 / 6</div>
                <img src="img_woods_wide.jpg" style={{width: "100%"}}/>
              </div>

              <div className="mySlides">
                <div className="numbertext">2 / 6</div>
                <img src="img_5terre_wide.jpg" style={{width: "100%"}}/>
              </div>

              <div className="mySlides">
                <div className="numbertext">3 / 6</div>
                <img src="img_mountains_wide.jpg" style={{width: "100%"}}/>
              </div>
                
              <div className="mySlides">
                <div className="numbertext">4 / 6</div>
                <img src="img_lights_wide.jpg" style={{width: "100%"}}/>
              </div>

              <div className="mySlides">
                <div className="numbertext">5 / 6</div>
                <img src="img_nature_wide.jpg" style={{width: "100%"}}/>
              </div>
                
              <div className="mySlides">
                <div className="numbertext">6 / 6</div>
                <img src="img_snow_wide.jpg" style={{width: "100%"}}/>
              </div>
      
              <a className="prev" onclick="plusSlides(-1)">❮</a>
              <a className="next" onclick="plusSlides(1)">❯</a>

              <div className="caption-container">
                <p id="caption"></p>
              </div>

              {/* <div className="row">
                <div className="column">
                  <img className="demo cursor" src="img_woods.jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods"/>
                </div>
                <div className="column">
                  <img className="demo cursor" src="img_5terre.jpg" style="width:100%" onclick="currentSlide(2)" alt="Cinque Terre"/>
                </div>
                <div className="column">
                  <img className="demo cursor" src="img_mountains.jpg" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords"/>
                </div>
                <div className="column">
                  <img className="demo cursor" src="img_lights.jpg" style="width:100%" onclick="currentSlide(4)" alt="Northern Lights"/>
                </div>
                <div className="column">
                  <img className="demo cursor" src="img_nature.jpg" style="width:100%" onclick="currentSlide(5)" alt="Nature and sunrise"/>
                </div>    
                <div className="column">
                  <img className="demo cursor" src="img_snow.jpg" style="width:100%" onclick="currentSlide(6)" alt="Snowy Mountains"/>
                </div>
              </div> */}
            </div> 

        </main>
    </>
  )
}

export default Details;
