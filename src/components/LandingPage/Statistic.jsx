import react from "react";
import logo from "../../assets/Clinic-logo.svg";
import style from "./Landing.module.css";
import PeopleLogo from "../../assets/LandingPage/PeopleLogo.svg";
import Awards from "../../assets/LandingPage/Awards.svg";
import Smile from "../../assets/LandingPage/Smile.svg";

function Statistic() {
  return (
    <div className={`text-light ${style.bgStatistic}`}>
      <div className="container text-center w-100">
        <div className="row g-4 row-cols-1 row-cols-lg-4 ms-4">
          <div className="col border-end border-4" style={{ marginLeft: "-30px" , paddingBottom: "75px", marginBottom:"20px" }}>
            <h3
              className="w-100 text-start"
              style={{ fontSize: "26px", marginTop:"30%" }}
            >
              We have accurate data
            </h3>
          </div>
          <div className="col ms-3" style={{marginTop:"4%"}}>
            <h2 className="text-start ms-4" style={{fontSize:"70px"}}>10 +</h2>
            <div className=" d-inline-flex justify-content-start fs-4 flex-shrink-0 me-3">
              <img src={PeopleLogo} alt="img" />
              <p className="text-start w-25 ms-3" style={{ fontSize: "24px" }}>
                Medical Expert
              </p>
            </div>
          </div>
          <div className="col" style={{marginTop:"4%"}}>
            <h2 className="text-start ms-4" style={{fontSize:"70px"}}>5 +</h2>
            <div className=" d-inline-flex  justify-content-start fs-4 flex-shrink-0 me-3">
              <img src={Awards} alt="img" />
              <p className="text-start ms-3 w-25" style={{ fontSize: "24px" }}>
                Awards Win
              </p>
            </div>
          </div>
          <div className="col" style={{marginTop:"4%"}}>
            <h2 className="text-start ms-4" style={{fontSize:"70px"}}>1k +</h2>
            <div className=" d-inline-flex  justify-content-start fs-4 flex-shrink-0 me-3">
              <img src={Smile} alt="img" />
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
