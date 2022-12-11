import react from "react";
import Header from "../components/LandingPage/Header";
import style from "../components/LandingPage/Landing.module.css";
import BgAboutText from "../assets/LandingPage/BgAboutText.svg";
import Hospital from "../assets/LandingPage/Hospital.jpg";

function AboutUs() {
  return (
    <>
      <Header />
      <div>
          <div>
            <img className={style.absolute} src={BgAboutText} alt="img" />
            <h1>Not Finished Yet</h1>
          </div>
        </div>
    </>
  );
}

export default AboutUs;
