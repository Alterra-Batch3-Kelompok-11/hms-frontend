import React, { useState } from "react";
import Slider from "react-slick";
import DoctorList from "../Doctor/DoctorList";

function PersonalCarousel() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="text-center w-100" style={{marginBottom:"80px"}}>
      <Slider {...settings}>
        {DoctorList.map((item) => (
          <div>
            <img
              className="rounded-circle shadow my-4"
              style={{ width: "170px", height: "170px" }}
              src={item.avatar}
              alt="img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PersonalCarousel;
