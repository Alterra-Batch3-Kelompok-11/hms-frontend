import react from "react";
import logo from "../../assets/Clinic-logo.svg";
import style from "./Landing.module.css";
import PeopleLogo from "../../assets/LandingPage/PeopleLogo.svg";

function Statistic() {
  return (
    <div className="text-light" style={{ background: "#001726" }}>
      <div className="container text-center">
        <div className="row g-4 row-cols-1 row-cols-lg-4 ms-4">
          <div className="col" style={{ marginLeft:"-30px"}}>
            <h3 className="w-100 border-end py-5" style={{ fontSize: "26px"}}>
              We have accurate patient statistics
            </h3>
          </div>
          <div className="col ms-3">
            <h2 className="text-start ms-3 fs-1">20 +</h2>
            <div className=" d-inline-flex justify-content-center fs-4 flex-shrink-0 me-3">
              <img src={PeopleLogo} alt="img" />
              <p className="text-start w-75 ms-3" style={{ fontSize: "24px" }}>
                Patient Of The Day
              </p>
            </div>
          </div>
          <div className="col">
            <h2 className="text-start ms-3 fs-1">80 +</h2>
            <div className=" d-inline-flex  justify-content-center fs-4 flex-shrink-0 me-3">
              <img src={PeopleLogo} alt="img" />
              <p className="text-start w-75 ms-3" style={{ fontSize: "24px" }}>
                Patient Of The Month
              </p>
            </div>
          </div>
          <div className="col">
            <h2 className="text-start ms-3 fs-1">1K +</h2>
            <div className=" d-inline-flex  justify-content-center fs-4 flex-shrink-0 me-3">
              <img src={PeopleLogo} alt="img" />
              <p className="text-start ms-3" style={{ fontSize: "24px" }}>
                Happy Patient
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
