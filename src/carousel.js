export function Carousel(){
    return(
        <>
  <div
    id="carouselExampleControls"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <img src="assets/img/carousel1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="assets/img/carousel2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="assets/img/carousel3.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</>
    )
}