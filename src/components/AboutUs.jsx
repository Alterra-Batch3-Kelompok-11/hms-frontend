import react from "react";
import logo from "../assets/Clinic-logo.svg";
import style from "./LandingPage/Landing.module.css";
import BgAboutText from "../assets/LandingPage/BgAboutText.svg";

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
        <div
          className="position-absolute top-0 start-50 translate-middle"
          style={{
            width: "467px",
            fontSize: "38px",
            marginTop: "170px",
            marginLeft: "120px",
          }}
        >
          <h1
            style={{
              color: "#CECECE",
              position: "absolute",
              marginLeft: "3px",
            }}
          >
            ABOUT US
          </h1>
          <h1 style={{ position: "absolute", marginTop: "7px" }}>
            <span style={{ color: "#0071BC" }}>ABOUT</span> US
          </h1>
        </div>
        <p className="fs-5" style={{ color: "#00395E", paddingTop: "70px" }}>
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
        <div className="whoAreWe text-start " style={{ marginRight: "30vw" }}>
          <h1 style={{ fontSize: "42px", marginBottom: "40px" }}>
            Who Are We?
          </h1>
          <p style={{ fontSize: "24px", marginBottom: "60px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div
          className="ourVision text-end float-end"
          style={{ marginLeft: "30vw" }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "40px" }}>Our Vision</h1>
          <p style={{ fontSize: "24px", marginBottom: "60px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="ourMission text-start " style={{ marginRight: "30vw" }}>
          <h1 style={{ fontSize: "42px", marginBottom: "40px" }}>
            Our Mission
          </h1>
          <p style={{ fontSize: "24px", paddingBottom: "114px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;