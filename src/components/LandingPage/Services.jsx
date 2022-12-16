import react from "react";
import style from "./Landing.module.css";
import Teeth from "../../assets/LandingPage/Teeth.svg";
import Lungs from "../../assets/LandingPage/Lungs.svg";
import Family from "../../assets/LandingPage/Family.svg";
import Orthopedic from "../../assets/LandingPage/Orthopedic.svg";
import Consultation from "../../assets/LandingPage/Consultation.svg";
import OurServices from "../../assets/LandingPage/OurServices.svg";

function service() {
  return (
    <>
      <div
        className="position-absolute start-50 translate-middle"
        style={{ marginTop: "90px" }}
      >
        <img className="my-5 py-5 img-fluid" src={OurServices} alt="img" />
      </div>

      <div
        className="container"
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
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div
              class="card"
              style={{
                backgroundColor: "#EBF2F9",
                width: "266px",
                height: "325px",
              }}
            >
              <img src={Teeth} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5
                  class="card-title d-flex justify-content-center"
                  style={{ fontSize: "24px", color: "#00395E" }}
                >
                  Dental Health
                </h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                backgroundColor: "#EBF2F9",
                width: "266px",
                height: "325px",
              }}
            >
              <img src={Lungs} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5
                  class="card-title d-flex justify-content-center"
                  style={{ fontSize: "24px", color: "#00395E" }}
                >
                  Pulmonary Lungs
                </h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                backgroundColor: "#EBF2F9",
                width: "266px",
                height: "325px",
              }}
            >
              <img src={Family} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5
                  class="card-title d-flex justify-content-center"
                  style={{ fontSize: "24px", color: "#00395E" }}
                >
                  Family Medical
                </h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                backgroundColor: "#EBF2F9",
                width: "266px",
                height: "325px",
              }}
            >
              <img src={Consultation} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5
                  class="card-title d-flex justify-content-center"
                  style={{ fontSize: "24px", color: "#00395E" }}
                >
                  Consultation
                </h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                backgroundColor: "#EBF2F9",
                width: "266px",
                height: "325px",
              }}
            >
              <img src={Orthopedic} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5
                  class="card-title d-flex justify-content-center"
                  style={{ fontSize: "24px", color: "#00395E" }}
                >
                  Orthopedic
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
