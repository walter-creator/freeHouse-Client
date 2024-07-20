import "../assets/css/Slideshow.css";
function SectionHome(){
    return(
        <>
        <section className="section home home-1" id="home" style={{marginTop: "2px"}}>
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-7">
                            <div className="home-heading">
                                <h1 className="mb-3 text-white">Optez pour le meilleur <span className="typewrite text-primary d-none d-sm-inline-block" data-period="2000" data-type='[ "Oxhen" ]'>
                                    <span className="wrap"></span> </span>
                                </h1>
                            </div>
                                <p className="text-white-50 fs-20">Explorer les differentes possibilite  dans tous le pays, 
                                toutes les villes et chaque quartier en 5 min tout en buvant du cafe, cest desormais possible </p>
                                <div className="container mt-3">
                                    <div className="search-bar">
                                    <input type="text" placeholder="rechercher une ville..."/>
                                    <button type="button"><i className="fas fa-search"></i></button>
                                    </div>
                                </div>
                        </div>
                        {/* <!-- end col--> */}
                    </div>
                    {/* <!-- end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
        </>
    )
}
export default SectionHome;