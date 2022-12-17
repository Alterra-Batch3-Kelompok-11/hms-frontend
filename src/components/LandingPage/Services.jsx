import react from "react";
import style from "./Landing.module.css";
import Teeth from "../../assets/LandingPage/Teeth.svg";
import Lungs from "../../assets/LandingPage/Lungs.svg";
import Family from "../../assets/LandingPage/Family.svg";
import Consultation from "../../assets/LandingPage/Consultation.svg";
import OurServices from "../../assets/LandingPage/OurServices.svg";

function service() {
  return (
    <>
      <div className="container" style={{ marginRight: "" }}>
        <img className="my-5 py-5 img-fluid" src={OurServices} alt="img" />
      </div>

      <div
        className="container"
        style={{ fontFamily: "Poppins", width: "65%" }}
      >
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center w-100">
          <h1 className=" fw-normal mb-4 mx-5" style={{ fontSize: "3rem" }}>
            Experienced in Multiple Medical Practices
          </h1>
          <p className="fs-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3">
          <div className="col mt-5">
            <div className="card mb-4 rounded-3 shadow mx-4 h-100">
              <div style={{ marginLeft: "24px", marginTop: "40px" }}>
                <img src={Teeth} alt="img" />
              </div>
              <div className="card-body mt-3">
                <h1
                  className="card-title pricing-card-title mb-3"
                  style={{ fontSize: "24px" }}
                >
                  Teeth
                </h1>
                <p style={{ fontSize: "18px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, e.
                </p>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <div className="card mb-4 rounded-3 shadow mx-4 h-100">
              <div style={{ marginLeft: "24px", marginTop: "40px" }}>
                <img src={Lungs} alt="img" />
              </div>
              <div className="card-body mt-3">
                <h1
                  className="card-title pricing-card-title mb-3"
                  style={{ fontSize: "24px" }}
                >
                  Pulmonary Lungs
                </h1>
                <p style={{ fontSize: "18px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, e.
                </p>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <div className="card mb-4 rounded-3 shadow mx-4 h-100">
              <div style={{ marginLeft: "24px", marginTop: "40px" }}>
                <img src={Family} alt="img" />
              </div>
              <div className="card-body mt-3">
                <h1
                  className="card-title pricing-card-title mb-3"
                  style={{ fontSize: "24px" }}
                >
                  Family Medical
                </h1>
                <p style={{ fontSize: "18px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, e.
                </p>
              </div>
            </div>
          </div>
          <div className="col"></div>
          <div className="col mt-5">
            <div className="card mb-4 rounded-3 shadow mx-4 h-100">
              <div style={{ marginLeft: "24px", marginTop: "40px" }}>
                <img src={Consultation} alt="img" />
              </div>
              <div className="card-body mt-3">
                <h1
                  className="card-title pricing-card-title mb-3"
                  style={{ fontSize: "24px" }}
                >
                  Consultation
                </h1>
                <p style={{ fontSize: "18px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, e.
                </p>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default service;