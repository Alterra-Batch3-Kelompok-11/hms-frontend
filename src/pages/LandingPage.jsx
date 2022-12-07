import react from "react";
import Header from "../components/LandingPage/Header";
import Landing from "../components/LandingPage/Landing";
import Personal from "../components/LandingPage/MedicalPersonal";
import Services from "../components/LandingPage/Services";
import Statistic from "../components/LandingPage/Statistic";
import Download from "../components/LandingPage/Download";
import About from "../components/LandingPage/About";


function LandingPage() {
  return (
    <div style={{fontFamily:"Poppins"}}>
      <Header />
      <Landing />
      <Services />
      <Personal />
      <Statistic />
      <Download />
    </div>
  );
}

export default LandingPage;
