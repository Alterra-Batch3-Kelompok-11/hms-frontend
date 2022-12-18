import react from "react";
import style from "./Landing.module.css";
import Teeth from "../../assets/LandingPage/Teeth.svg";
import Lungs from "../../assets/LandingPage/Lungs.svg";
import Family from "../../assets/LandingPage/Family.svg";
import Orthopedic from "../../assets/LandingPage/Orthopedic.svg";
import Consultation from "../../assets/LandingPage/Consultation.svg";
import Beauty from "../../assets/LandingPage/Beauty.svg";

function service() {
  return (
    <>
      <div
        className="position-absolute start-50 translate-middle"
        style={{ marginTop: "90px" }}
      >
        <h1 style={{ marginTop: "7px", fontSize:'38px' }}>
          OUR <span style={{ color: "#0071BC" }}>SERVICES</span>
        </h1>
      </div>

      <div
        className="container"
        id="services"
        style={{ fontFamily: "Poppins", width: "65%", marginTop: "223px" }}
      >
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center w-100">
          <h1 className=" fw-normal mb-4 mx-5" style={{ fontSize: "3rem" }}>
            Experienced in Multiple Medical Practices
          </h1>
          <p className="fs-4">
            The services we provide are guided by our experienced and best
            medical personel
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className={`card shadow ${style.cardServices}`}>
              <img src={Teeth} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5
                  className={` card-title d-flex justify-content-center ${style.cardServicesText}`}
                >
                  Dental Health
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card shadow ${style.cardServices}`}>
              <img src={Lungs} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5
                  className={` card-title d-flex justify-content-center ${style.cardServicesText}`}
                >
                  Pulmonary Lungs
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card shadow ${style.cardServices}`}>
              <img src={Family} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5
                  className={` card-title d-flex justify-content-center ${style.cardServicesText}`}
                >
                  Family Medical
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card shadow ${style.cardServices}`}>
              <img src={Consultation} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5
                  className={` card-title d-flex justify-content-center ${style.cardServicesText}`}
                >
                  Consultation
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card shadow ${style.cardServices}`}>
              <img src={Orthopedic} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5
                  className={` card-title d-flex justify-content-center ${style.cardServicesText}`}
                >
                  Orthopedic
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card shadow ${style.cardServices}`}>
              <img src={Beauty} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5
                  className={` card-title d-flex justify-content-center ${style.cardServicesText}`}
                >
                  Beauty Specialist
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default service;
