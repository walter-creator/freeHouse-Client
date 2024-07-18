import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import "../assets/css/chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

//images
import marie from "../assets/img/marie.jpg";

function Discussion() {
  return (
    <>
      <Sidebar a4="active" />
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Nav titre="Discussion" input="none" />

        {/** Inserons ici le block principale de la discussion  */}
        <div className="container chat">
          <div className="row">
            <div className="row chat-header">
              <div className="col-md-8">
                <div className="row ">
                  <div className="col-md-2">
                    <div className="avatar">
                      <img src={marie} alt="Avatar" className="avatar" />
                    </div>
                  </div>
                  <div className="col-md-8 avatar-nom">
                    <h4>Marie </h4>
                  </div>
                  <div className="col-md-2">
                    {/** ne rien mettre ici exc */}
                  </div>
                </div>

                <div className="row">
                  <div className="topnav">
                    <div className="row bulle-left" style={{ color: "white" }}>
                      <p style={{color:"black"}}>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis iure sint id aliquid eligendi aliquam fugit eaque.
                        Officia consequuntur hic corporis at accusamus
                        consectetur ex!{" "}
                      </p>
                    </div>
                    <div
                      className="row bulle-right f-rigth"
                      style={{ color: "black" }}
                    >
                      <p style={{color:"black"}}>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit soluta nulla numquam animi et, a eius dolore, harum
                        totam fugiat iusto esse officia impedit, illum nisi
                        alias velit ipsa nesciunt rerum eum voluptates quod! Rem
                        .{" "}
                      </p>
                    </div>
                  </div>

                  <div className="message">
                    <input
                      type="text"
                      className="message"
                      placeholder="Votre message ici ..."
                    />
                    <button>
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row search">
                  <input type="text" name="search" placeholder="Search.." />
                </div>
                <div className="row discussion">
                  <ul className="list-group">
                    <li>
                      <div className="row conv">
                        <div className="col-md-1 c-1">
                          <img src={marie} alt="Avatar" className="avatar" />
                        </div>
                        <div className="col-md-8 c-2">
                          <h6> Fongang</h6>
                          <p> hey je suis interrese par cette annonce </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row conv">
                        <div className="col-md-1 c-1">
                          <img src={marie} alt="Avatar" className="avatar" />
                        </div>
                        <div className="col-md-8 c-2">
                          <h6> Fongang</h6>
                          <p> hey je suis interrese par cette annonce </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row conv">
                        <div className="col-md-1 c-1">
                          <img src={marie} alt="Avatar" className="avatar" />
                        </div>
                        <div className="col-md-8 c-2">
                          <h6> Fongang</h6>
                          <p> hey je suis interrese par cette annonce </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row conv">
                        <div className="col-md-1 c-1">
                          <img src={marie} alt="Avatar" className="avatar" />
                        </div>
                        <div className="col-md-8 c-2">
                          <h6> Fongang</h6>
                          <p> hey je suis interrese par cette annonce </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row conv">
                        <div className="col-md-1 c-1">
                          <img src={marie} alt="Avatar" className="avatar" />
                        </div>
                        <div className="col-md-8 c-2">
                          <h6> Fongang</h6>
                          <p> hey je suis interrese par cette annonce </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row conv">
                        <div className="col-md-1 c-1">
                          <img src={marie} alt="Avatar" className="avatar" />
                        </div>
                        <div className="col-md-8 c-2">
                          <h6> Fongang</h6>
                          <p>
                            {" "}
                            hey je suis interrese par cette annonce Lorem ipsum
                             Magni.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Discussion;
