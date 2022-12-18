import react from "react";
import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";
import Landing from "../components/LandingPage/Landing";
import Personal from "../components/LandingPage/MedicalPersonal";
import Services from "../components/LandingPage/Services";
import Statistic from "../components/LandingPage/Statistic";
import Download from "../components/LandingPage/Download";
import CustomerComment from "../components/LandingPage/CustomerComment";


function LandingPage() {
  return (
    <div style={{fontFamily:"Poppins"}}>
      <Header />
      <Landing />
      <Services />
      <Personal />
      <Statistic />
      <Download /> 
      <CustomerComment />
      <Footer />
    </div>
  );
}

export default LandingPage;