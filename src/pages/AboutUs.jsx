import react from "react";
import Header from "../components/LandingPage/Header";
import About from "../components/AboutUs/About"
import style from "../components/LandingPage/Landing.module.css";
import BgAboutText from "../assets/LandingPage/BgAboutText.svg";
import Hospital from "../assets/LandingPage/Hospital.jpg";

function AboutUs() {
  return (
    <>
      <Header />
      <About />
    </>
  );
}

export default AboutUs;
