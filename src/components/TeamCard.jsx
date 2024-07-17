import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import chamb1 from  "../assets/img/chambre/chambre1.jpg";
import   "../assets/img/chambre/chambre2.jpg";
import  "../assets/img/chambre/chambre3.jpg";
import   "../assets/img/chambre/chambre4.jpg";
import  "../assets/img/chambre/chambre5.jpg";
import {
  faHeart,
  faMessage,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
function TeamCard({ titre, prix, img }) {
  const [isClicked, setIsClicked] = useState(false);
 
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="team-card">
        <div className="team-card-img">
          <img className="img-fluid" src={chamb1} alt="image" />
          <div className="team-social-icons">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="javascript:void(0)" target="">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`icon ${isClicked ? "clicked" : ""}`}
                    onClick={handleClick}
                    style={{ color: isClicked ? "#FF69B4" : "#fff" }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)" target="">
                  <FontAwesomeIcon icon={faMessage} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/detail" target="">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="team-card-text-2">
          <h5 className="fw-bold mb-0">{titre}</h5>
          <p className="mb-0 fs-13 text-muted">{prix} /mois</p>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
