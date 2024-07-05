
import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import Slideshow from "../components/Slideshow";



function Details() {

   

  return (
    <>
        <Sidebar a3="active" /> 
        <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
            <Nav titre="Plus de details" input="none"/>
            
            <div className="presentation">
                <h2 style={{ textAlign: 'center' }}>Presentation des details</h2>
                <Slideshow />
            </div>
            
        </main>
    </>
  )
}

export default Details;
