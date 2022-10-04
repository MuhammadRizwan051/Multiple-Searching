import React from 'react'
import img_Slider_1 from "../Images/slider_1.jpg";
import img_Slider_2 from "../Images/slider_2.jpg";


function Slider() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade container" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img_Slider_1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img_Slider_2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>

  );
}

export default Slider;