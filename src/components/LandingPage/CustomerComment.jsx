import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import CustomerList from "./CustomerList";
import NextArrowComment from "../../assets/LandingPage/NextArrow.svg";
import PrevArrowComment from "../../assets/LandingPage/PrevArrow.svg";

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next bg-transparent mt-5" onClick={onClick} >
        <img src={NextArrowComment} alt="img" style={{marginLeft:"-90px"}}/>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev bg-transparent mt-5" onClick={onClick}>
        <img src={PrevArrowComment} alt="img" style={{marginRight:"-140px"}}/>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App mt-5 text-center container">
      <div>
        <h1 style={{ marginTop: "7px" }}>
          What Our <span style={{ color: "#0071BC" }}>Customer</span> Say
        </h1>
      </div>
      <Slider {...settings}>
        {CustomerList.map((val, idx) => (
          <div>
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <div
                className="card top-50 translate-middle shadow mt-5"
                style={{ width: "664px", height: "337px", marginLeft: "-90px" }}
              >
                <img
                  src={val.images}
                  className="card-img-top"
                  alt="img"
                  style={{
                    height: "120px",
                    width: "120px",
                    borderRadius: "50%",
                    marginTop: "23px",
                    marginBottom: "14px",
                  }}
                ></img>
                <h1 style={{ fontSize: "34px" }}>{val.nama}</h1>
                <div className="card-body" style={{ margin: "0px 65px" }}>
                  <p className="card-text">{val.komentar}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
