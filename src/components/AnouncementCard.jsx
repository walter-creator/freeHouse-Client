// eslint-disable-next-line react/prop-types
function AnouncementCard({ titre, type, desc, img }) {
  return (
    <>
      <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
        <div className="card card-blog card-plain">
          <div className="position-relative">
            <a className="d-block shadow-xl border-radius-xl">
              <img
                src={img}
                alt="img-blur-shadow"
                className="img-fluid shadow border-radius-xl"
              />
            </a>
          </div>
          <div className="card-body px-1 pb-0">
            <p className="text-gradient text-dark mb-2 text-sm"> # {type} </p>
            <a href="javascript:;">
              <h5>{titre}</h5>
            </a>
            <p className="mb-4 text-sm">{desc}</p>
            <div className="d-flex align-items-center justify-content-between">
              <div className="ms-auto text-end">
                <a
                  className="btn btn-link text-danger text-gradient px-3 mb-0"
                  href="javascript:;"
                >
                  <i className="far fa-trash-alt me-2"></i>Delete
                </a>
                <a className="btn btn-link text-dark px-3 mb-0" href="javascript:;">
                  <i
                    className="fas fa-pencil-alt text-dark me-2"
                    aria-hidden="true"
                  ></i>
                  Edit
                </a>
              </div>
              signIn
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AnouncementCard;
