import react from "react";
import logo from "../../assets/Clinic-logo.svg";
import style from "./Landing.module.css";

function LandingPage() {
  return (
    <div
      className={style.bgBody}
      style={{ height: "783px", fontFamily: "Poppins" }}
    >
      <div className="container text-end">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-8">
            <h1 style={{ paddingTop: "10vw", fontSize:"52px" }}>
              Dapatkan Pelayanan terbaik dari Kami di
              <span className={style.gradientText}> Cleanic</span>
            </h1>
            <p className="lead" style={{fontSize:"28px"}}>
              Kami menyediakan pelayanan kesehatan yang terbaik, praktis, dan
              efisien untuk pasien-pasien kami.
            </p>
            <button type="button" className="btn py-2 px-4" style={{backgroundColor:"#0071BC", color:"white"}}>
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
