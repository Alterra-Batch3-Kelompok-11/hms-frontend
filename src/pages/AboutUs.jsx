import react from "react";
import Header from "../components/LandingPage/Header";
import About from "../components/AboutUs";
import Footer from "../components/LandingPage/Footer";
import style from "../components/LandingPage/Landing.module.css";

function AboutUs() {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
} 

export default AboutUs;