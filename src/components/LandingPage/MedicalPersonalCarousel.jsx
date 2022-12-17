import React, { useState } from "react";
import Slider from "react-slick";
import DoctorList from "../Doctor/DoctorList";
import prev from "../../assets/LandingPage/PrevArrow2.svg";
import next from "../../assets/LandingPage/NextArrow2.svg";
import "./App.css";

function PersonalCarousel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="arrow next bg-transparent mt-5 mb-5"
        onClick={onClick}
        style={{ marginRight: "2%" }}
      >
        <img src={next} alt="" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="arrow prev bg-transparent mt-5" onClick={onClick} style={{ marginLeft:"-70px" }}
      >
        <img src={prev} alt="" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      className="text-center w-100"
      style={{ marginBottom: "80px", paddingLeft: "10%" }}
    >
      <Slider {...settings}>
        {DoctorList.map((item) => (
          <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div
                  className="card"
                  style={{
                    width: "348px",
                    height: "483px",
                  }}
                >
                  <img
                    src={item.avatar}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "300px",
                      height: "272px",
                      marginLeft: "24px",
                      marginTop: "24px",
                    }}
                  ></img>
                  <div className="card-body">
                    <h5
                      className="card-title d-flex justify-content-center mt-4"
                      style={{ fontSize: "25px", color: "#00395E" }}
                    >
                      Dr. {item.name}
                    </h5>
                    <h5
                      className="mt-4"
                      style={{ fontSize: "18px", color: "#00395E" }}
                    >
                      This doctor has specialists {item.Spesialis}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PersonalCarousel;
