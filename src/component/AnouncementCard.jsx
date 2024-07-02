
function AnouncementCard({titre, type, desc, img}) {

  return (
    <>
    <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
        <div className="card card-blog card-plain">
            <div className="position-relative">
            <a className="d-block shadow-xl border-radius-xl">
                <img src={img} alt="img-blur-shadow" className="img-fluid shadow border-radius-xl"/>
            </a>
            </div>
            <div className="card-body px-1 pb-0">
            <p className="text-gradient text-dark mb-2 text-sm"> # {type} </p>
            <a href="javascript:;">
                <h5>
                {titre}
                </h5>
            </a>
            <p className="mb-4 text-sm">
             {desc}
            </p>
            <div className="d-flex align-items-center justify-content-between">
                                  
                <div className="dropdown">
                <button onclick="myFunction()" className="dropbtn">Actions </button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="#">Supprimer</a>
                    <a href="#">Modifier</a>
                </div>
                </div>

            </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default AnouncementCard;
