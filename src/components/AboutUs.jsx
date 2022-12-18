import react from "react";
import logo from "../assets/Clinic-logo.svg";
import style from "./LandingPage/Landing.module.css";
import BgAboutText from "../assets/LandingPage/BgAboutText.svg";
import AboutUs from "../assets/LandingPage/AboutUs.svg";
import AboutUsDoctor from "../assets/LandingPage/AboutUsDoctor.svg";

function About() {
  return (
    <>
      <div
        className={` text-center ${style.bgBody}`}
        style={{
          height: "231px",
          fontFamily: "Poppins",
          borderRadius: "0px 0px 200px 200px",
        }}
      >
        <div className="" style={{}}>
          <img className="img-fluid" src={AboutUs} alt="img" />
        </div>
        <p className="fs-5" style={{ color: "#00395E", paddingTop: "20px" }}>
          Provide the Best Efforts and Services
        </p>
      </div>
      <div
        className={` text-center ${style.bgAboutHospital}`}
        style={{
          height: "1024px",
        }}
      ></div>
      <div
        className="deskripsi"
        style={{
          marginLeft: "135px",
          marginRight: "135px",
          fontFamily: "Poppins",
        }}
      >
        <div className="whoAreWe text-start " style={{ marginTop: "40px" }}>
          <div className="mb-3">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h1 style={{ fontSize: "42px" }}>Who Are We?</h1>
                  <p
                    className="card-text"
                    style={{ fontSize: "24px", width: "634px" }}
                  >
                    CLINIC is a digital health platform used by our medical
                    personnel. Since 2022, CLINIC has made it easy, efficient
                    and practical for medical staff to process patients who come
                    to our clinic. Furthermore, its features are easy to
                    understand, simple, and have a clear flow that makes user
                    feel satisfied.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={AboutUsDoctor}
                  className="img-fluid rounded-start"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ourVision justify-content-center text-center"
          style={{ marginTop: "100px" }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "40px" }}>Our Vision</h1>
          <p style={{ fontSize: "24px", marginBottom: "80px" }}>
            Be a clinic that has excellent quality in health services, research,
            and community service.
          </p>
        </div>
        <div
          className="ourVision justify-content-center text-center"
          style={{ marginTop: "100px" }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "40px" }}>
            Our Mission
          </h1>
          <ol
            className="text-start"
            style={{ fontSize: "24px", width: "1170px", marginLeft: "30px" }}
          >
            <li>
              Providing comprehensive, quality and affordable health services to
              all levels of society that are oriented towards patient safety and
              customer satisfaction.
            </li>
            <li>
              Carrying out innovative health research in the context of
              achieving and developing technology in the health sector that is
              visionary for the benefit of society.
            </li>
            <li>
              Organizing services, especially in the health sector according to
              the needs of the community and
            </li>
            <li>
              Organizing RSUB management activities in a professional, effective
              and efficient manner that is useful for service development,
              research and community service.
            </li>
          </ol>
        </div>
        <div
          className="ourVision justify-content-center text-center"
          style={{ marginTop: "100px" }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "40px" }}>Motto</h1>
          <p style={{ fontSize: "24px", paddingBottom: "80px" }}>
            RSUB : Risk management, Safety, Unlimited Quality, Be the Best
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
