import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/Io";
import CustomerList from "./CustomerList";
import NextArrow from "../../assets/LandingPage/NextArrow.svg";
import PrevArrow from "../../assets/LandingPage/PrevArrow.svg";

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next bg-transparent mt-5" onClick={onClick}>
        <IoMdArrowDropright style={{ color: "#0071BC", fontSize: "80px" }} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev bg-transparent mt-5" onClick={onClick}>
        <IoMdArrowDropleft style={{ color: "#0071BC", fontSize: "80px" }} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App mt-5 text-center container">
      <div style={{ width: "467px", fontSize: "38px", marginLeft: "400px" }}>
        <h1
          style={{ color: "#CECECE", position: "absolute", marginLeft: "3px" }}
        >
          What Our Customer Say
        </h1>
        <h1 style={{ position: "absolute", marginTop: "7px" }}>
          What Our <span style={{ color: "#0071BC" }}>Customer</span> Say
        </h1>
      </div>
      <Slider {...settings}>
        {CustomerList.map((val, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <div
              class="card position-absolute top-50 translate-middle shadow mt-5"
              style={{ width: "664px", height: "337px", marginLeft: "0px" }}
            >
              <img
                src={val.images}
                class="card-img-top"
                alt="img"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "50%",
                  marginTop: "23px",
                  marginBottom: "14px",
                }}
              ></img>
              <h1 style={{ fontSize: "36px" }}>{val.nama}</h1>
              <div class="card-body" style={{ margin: "0px 65px" }}>
                <p class="card-text">{val.komentar}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
