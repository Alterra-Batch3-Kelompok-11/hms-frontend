import react from "react";
import logo from "../../assets/Clinic-logo.svg";
import style from "./Landing.module.css";
import People from "../../assets/LandingPage/People.svg";
import CheckMore from "../../assets/LandingPage/CheckMore.svg";
import OurMedicalPersonal from "../../assets/LandingPage/OurMedicalPersonal.svg";

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
        <div className="container text-center">
          <ul className="list-inline" style={{paddingBottom:"80px"}}>
            <li className="list-inline-item">
              <img
                className="rounded-circle shadow my-4"
                style={{ marginRight: "98px" }}
                src={People}
                alt="img"
              />
            </li>
            <li className="list-inline-item">
              <img
                className="rounded-circle shadow my-4"
                style={{ marginRight: "98px" }}
                src={People}
                alt="img"
              />
            </li>
            <li className="list-inline-item">
              <img
                className="rounded-circle shadow my-4"
                style={{ marginRight: "98px" }}
                src={People}
                alt="img"
              />
            </li>
            <li className="list-inline-item">
              <img className="me-4" src={CheckMore} alt="img" />
              <h2
                style={{
                  display: "inline",
                  fontFamily: "Poppins",
                  color: "#00395E",
                }}
              >
                Check More
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Personal;
