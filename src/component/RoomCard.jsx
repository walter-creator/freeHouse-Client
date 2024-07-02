import waves from "../assets/img/shapes/waves-white.svg";
import rocket from '../assets/img/illustrations/rocket-white.png';

function RoomCard({title, desc, type, img}) {


  return (
    <> 
    <div className="surround">
      <div className="row m-2">
          <div className="col-lg-6">
              <div className="d-flex flex-column h-100">
                  <p className="mb-1 pt-2 text-bold"> { type } </p>
                  <h5 className="font-weight-bolder"> { title } </h5>
                  <p className="mb-5"> {desc} </p>
                  <a className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto " href="javascript:;">
                      Read More
                  <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                  </a>
              </div>
                         
          </div>
          <div className="col-lg-5 ms-auto text-center mt-3 mt-lg-0">
              <div className="bg-gradient-secondary border-radius-lg h-100">
                  <img src={waves} className="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves"/>
                  <div className="position-relative d-flex align-items-center justify-content-center h-100">
                      <img className="w-100 position-relative z-index-2 pt-4" src={img} alt="rocket"/>
                  </div>
              </div>
          </div>
      </div>
    </div>
     
    </>
  )
}

export default RoomCard;
