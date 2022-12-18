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
        className="arrow next bg-transparent position-absolute top-0 translate-middle"
        onClick={onClick}
        style={{ marginRight: "1%", paddingBottom:"50px" }}
      >
        <img src={next} alt="img" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="arrow next bg-transparent position-absolute top-0 translate-middle"
        onClick={onClick}
        style={{ marginRight: "5%", paddingBottom:"50px" }}
      >
        <img src={prev} alt="img" />
      </div>
    );
  }

  const settings = {
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
      className="text-center container"
      style={{ marginBottom: "80px", minWidth: "1170px" }}
    >
      <Slider {...settings}>
        {DoctorList.map((item) => (
          <div className="d-flex justify-content-center" >
            <div className="row row-cols-1 row-cols-md-3 g-4 " style={{ paddingBottom:"130px"}}>
              <div className="col">
                <div
                  className="card shadow"
                  style={{
                    width: "348px",
                    height: "463px",
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
