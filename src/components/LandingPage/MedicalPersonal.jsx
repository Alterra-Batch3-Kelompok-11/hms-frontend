import react from "react";
import logo from "../../assets/Clinic-logo.svg";
import style from "./Landing.module.css";
import People from "../../assets/LandingPage/People.svg";
import CheckMore from "../../assets/LandingPage/CheckMore.svg";
import OurMedicalPersonal from "../../assets/LandingPage/OurMedicalPersonal.svg";
import PersonalCarousel from "./MedicalPersonalCarousel";

function Personal() {
  return (
    <div className={style.bgAbout} style={{ fontFamily: "Poppins" }}>
      <div>
        <div className="container">
          <img
            style={{
              //   paddingLeft: "139px",
              marginTop: "88px",
              marginBottom: "75px",
            }}
            className="img-fluid ps-5"
            src={OurMedicalPersonal}
            alt="img"
          />
        </div>
        <PersonalCarousel />
      </div>
    </div>
  );
}

export default Personal;