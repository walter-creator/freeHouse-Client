
// eslint-disable-next-line react/prop-types
function RecAnonce({titre, type, desc, img}) {

    return (
      <>
      <div className="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-3 recAnonce">
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
                <a className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto mb-3" href="javascript:;">
                      Voire plus
                  <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                </a>
              </div>
          </div>
      </div>
      </>
    )
  }
  export default RecAnonce;
  