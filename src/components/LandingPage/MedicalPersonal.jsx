import react from "react";
import logo from "../../assets/Clinic-logo.svg";
import style from "./Landing.module.css";
import People from "../../assets/LandingPage/People.svg";
import CheckMore from "../../assets/LandingPage/CheckMore.svg";
import OurMedicalPersonal from "../../assets/LandingPage/OurMedicalPersonal.svg";
import PersonalCarousel from "./MedicalPersonalCarousel";

function Personal() {
  return (
    <div
      className={`${style.borderTop}`}
      style={{ fontFamily: "Poppins", marginTop: "80px" }}
    >
      <div>
        <div className="container">
          <h1
            className="d-flex justify-content-center"
            style={{ marginTop: "87px" }}
          >
            OUR{" "}
            <span style={{ color: "#0071BC", marginLeft: "10px" }}>
              MEDICAL EXPERT
            </span>
          </h1>
          <p className=" d-flex justify-content-center"style={{fontSize:"24px", marginTop:"40px", marginBottom:"90px"}}>Meet our Medical expert professionals and enjoy the service</p>
        </div>
        <PersonalCarousel />
      </div>
    </div>
  );
}

export default Personal;
